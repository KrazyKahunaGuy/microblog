import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";

import { UsersModule } from "../users/users.module"
import { AuthenticationService } from "./authentication.service";
import { AuthenticationController } from "./authentication.controller";
import { LocalStrategy } from "./local.strategy";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [UsersModule, PassportModule, ConfigModule],
    providers: [AuthenticationService, LocalStrategy],
    controllers: [AuthenticationController],
})

export class AuthenticationModule { }