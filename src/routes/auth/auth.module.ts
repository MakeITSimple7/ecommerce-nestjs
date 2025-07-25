import { AuthRepository } from './auth.repo'
import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { RolesService } from './roles.service'
import { GoogleService } from './google.service'

@Module({
  providers: [AuthService, RolesService, GoogleService, AuthRepository],
  controllers: [AuthController],
})
export class AuthModule {}
