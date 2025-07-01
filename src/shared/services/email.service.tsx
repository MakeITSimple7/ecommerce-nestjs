import { OTPEmail } from '../../../emails/OTPEmail';
import { Injectable } from '@nestjs/common'
import React from 'react'
import { Resend } from 'resend'
import envConfig from '../config'

@Injectable()
export class EmailService {
  private resend: Resend
  constructor() {
    this.resend = new Resend(envConfig.RESEND_API_KEY)
  }

  sendOTP(payload: { email: string; code: string }) {
    const subject = 'OTP Code'
    return this.resend.emails.send({
      from: 'Ecommerce <no-reply@makeitsimple.io.vn>',
      to: [payload.email],
      subject,
      react: <OTPEmail otpCode={payload.code} title={subject} />,
    })
  }
}
