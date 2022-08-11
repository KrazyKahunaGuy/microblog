import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";

import { UsersModule } from "../users/users.module"
import { AuthenticationService } from "./authentication.service";
import { AuthenticationController } from "./authentication.controller";
import { LocalStrategy } from "./local.strategy";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";

@Module({
    imports: [
        UsersModule,
        PassportModule,
        ConfigModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: {
                    expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}s`,
                }
            })
        })
    ],
    providers: [AuthenticationService, LocalStrategy, JwtStrategy],
    controllers: [AuthenticationController],
})

export class AuthenticationModule { }