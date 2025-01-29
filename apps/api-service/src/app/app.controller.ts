import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ClerkAuth } from '@next-auth/clerk-auth';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ClerkAuth()
  async getData() {
    return this.appService.getData();
  }
}
