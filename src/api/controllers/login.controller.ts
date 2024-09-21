/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post } from '@nestjs/common';

@Controller('login')
export class LoginController {
    @Post()
    async login() {
        return;
    }
}
