import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MailService {
  private readonly logger = new Logger('MailService');

  constructor(private readonly mailerService: MailerService) {}

  async testEmail() {
    const toEmails = ['rodrigo.ss0606@gmail.com'];
    const template = './certificado.hbs';

    try {
        this.mailerService.sendMail({
          from: 'onboarding@resend.dev',
          to: toEmails,
          subject: `How to Send Emails with Nodemailer`,
          template: template,
        });
    
      this.logger.log('Email sent successfully');
    } catch (error) {
      this.logger.error('Failed to send email', error.stack);
    }
  }
}
