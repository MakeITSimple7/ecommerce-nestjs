import { createZodDto } from 'nestjs-zod'
import { RegisterBodySchema, UserSchema } from './auth.model'

export class RegisterBodyDTO extends createZodDto(RegisterBodySchema) {}

export class RegisterResDTO extends createZodDto(UserSchema) {}
