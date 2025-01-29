import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClerkAuthModule } from '@next-auth/clerk-auth';

@Module({
  imports: [ClerkAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
