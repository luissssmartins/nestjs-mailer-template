import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from './modules/mail.module';

@Module({
  
  imports: [
    ConfigModule.forRoot(),
    MailModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
