import { MailerService } from "@nest-modules/mailer";
import { MailerModule } from "@nest-modules/mailer";
import { Module } from "@nestjs/common";

@Module({
    imports: [

      MailerModule.forRoot({

        transport: {

          service: 'gmail',
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.MAILER_USER,
            pass: process.env.MAILER_PASSWORD
          },

          ignoreTLS: false,
        },

        defaults: {
          from: '"',
        },
      }),
    ],

    providers: [MailerModule],
    exports: [MailerModule]
})

export class MailModule {}