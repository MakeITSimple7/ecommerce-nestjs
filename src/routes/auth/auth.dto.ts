import { createZodDto } from 'nestjs-zod'
import { LoginBodySchema, LoginResSchema, RegisterBodySchema, SendOTPBodySchema } from './auth.model'
import { UserSchema } from 'src/shared/models/shared-user.model'

export class RegisterBodyDTO extends createZodDto(RegisterBodySchema) {}

export class RegisterResDTO extends createZodDto(UserSchema) {}

export class SendOTPBodyDTO extends createZodDto(SendOTPBodySchema) {}

export class LoginBodyDTO extends createZodDto(LoginBodySchema) {}

export class LoginResDTO extends createZodDto(LoginResSchema) {}
