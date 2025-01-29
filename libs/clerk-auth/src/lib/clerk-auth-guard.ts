import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Http2ServerRequest } from 'http2';
import { verifyToken } from '@clerk/backend';
import { RolesMeta } from './clerk-auth.constants';
import { Reflector } from '@nestjs/core';
import { ClerkConfigService } from './clerk-config.service';

const getToken = (context: ExecutionContext): string | undefined => {
  const request = context.switchToHttp().getRequest<Http2ServerRequest>();
  const authz = request.headers['authorization'];
  const token = authz?.split(' ')[1];

  return token;
};

@Injectable()
export class VerifyTokenGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @Inject() private clerkConfig: ClerkConfigService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const _roles = this.reflector.get<string[]>(
      RolesMeta,
      context.getHandler()
    );

    const token = getToken(context);
    if (!token) {
      return false;
    }
    try {
      await verifyToken(token, {
        jwtKey: process.env['CLERK_JWT_KEY'],
        secretKey: this.clerkConfig.secretKey(),
      });
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  }
}
