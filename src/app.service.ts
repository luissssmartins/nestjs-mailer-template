import { Injectable } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';
import { Subject } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private mailerService: MailerService) {}

  async handleEmail(email: string, message: string) {
    await this.mailerService.sendMail({

      to: email,
      from: process.env.SENDER,
      subject: process.env.SUBJECT,
      html: `<h3 style="color: red">${message}</h3>`

    });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
