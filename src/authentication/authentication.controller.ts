import { Body, Controller, HttpCode, Post, Req, UseGuards } from "@nestjs/common";

import { AuthenticationService } from "./authentication.service";
import { LocalAuthenticationGuard } from "./localAuthentication.guard";
import RequestWithUser from "./requestWithUser.interface";
import RegisterDto from "./dto/register.dto";

@Controller('authentication')
export class AuthenticationController {
    constructor(
        private readonly authenticationService: AuthenticationService
    ) { }

    @Post('register')
    async register(@Body() registrationData: RegisterDto) {
        return this.authenticationService.register(registrationData);
    }

    @HttpCode(200)
    @UseGuards(LocalAuthenticationGuard)
    @Post('log-in')
    async logIn(@Req() request: RequestWithUser) {
        const user = request.user;
        user.password = undefined;
        return user;
    }
}