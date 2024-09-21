/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post } from '@nestjs/common';

@Controller('logout')
export class LogoutController {
    @Post()
    async register() {
        return;
    }
}
