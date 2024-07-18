import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailController } from './mail.controller';

@Module({
  imports:[
    MailerModule.forRootAsync({
      useFactory: async(config: ConfigService)=>({
        transport: {
          host: process.env.EMAIL_HOST,
          port: 465,
          auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
          },
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true
          }
        }

      })
    }),
  //   MailerModule.forRootAsync({
  //     imports:[ConfigModule],
  //     useFactory: async (config: ConfigService)=>({
  //       transport: {
  //         host: process.env.EMAIL_HOST,
  //         auth: {
  //           user: process.env.EMAIL_USERNAME,
  //           pass: process.env.EMAIL_PASSWORD
  //         }
  //       },
  //       template: {
  //         dir: join(__dirname, 'templates'),
  //         adapter: new HandlebarsAdapter(),
  //         options: {
  //           strict: true
  //         }
  //       }
  //     }),
  //     inject: [ConfigService]
  //   })
  ],
  providers: [MailService],
  controllers: [MailController],
  exports: [MailService]
})
export class MailModule {}
