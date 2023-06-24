import { MailerModule } from "@nest-modules/mailer";
import { Module } from "@nestjs/common";

@Module({
    imports: [

      MailerModule.forRoot({

        transport: {

          host: 'smtp.mailgun.org',
          port: 587,
          secure: false,

          auth: {
            user: process.env.MAILER_USERNAME,
            pass: process.env.MAILER_PASSWORD
          },

          ignoreTLS: true,

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