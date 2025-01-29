import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { RolesMeta } from './clerk-auth.constants';
import { VerifyTokenGuard } from './clerk-auth-guard';

export function ClerkAuth(...roles: string[]) {
  return applyDecorators(
    SetMetadata(RolesMeta, roles),
    UseGuards(VerifyTokenGuard)
  );
}
