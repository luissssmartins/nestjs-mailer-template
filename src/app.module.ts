import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nest-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: false,
        auth: {
          user: process.env.MAILER_USER,
          pass: process.env.MAILER_PASSWORD
        },
        ignoreTLS: true,
      },
      defaults: {
        from: '"',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
