import { Injectable } from '@nestjs/common'
import { Resend } from 'resend'
import envConfig from '../config'
import path from 'path'
import fs from 'fs'

@Injectable()
export class EmailService {
  private resend: Resend
  constructor() {
    this.resend = new Resend(envConfig.RESEND_API_KEY)
  }

  sendOTP(payload: { email: string; code: string }) {
    const otpTemplate = fs.readFileSync(path.resolve('src/shared/email-templates/otp.html'), 'utf-8')
    const subject = 'OTP Code'
    return this.resend.emails.send({
      from: 'Ecommerce <no-reply@makeitsimple.io.vn>',
      to: [payload.email],
      subject,
      html: otpTemplate.replaceAll('{{subject}}', subject).replaceAll('{{code}}', payload.code),
    })
  }
}
