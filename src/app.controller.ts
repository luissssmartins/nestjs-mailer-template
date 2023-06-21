import { Controller, Get, Post, Render, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get('email')
  @Render('form')
  handleForm() {

  }

  @Post('send-email')
  handleEmailProcessor(@Request() req) {
    return this.appService.handleEmail(
      req.body.email,
      req.body.message,
    );
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
