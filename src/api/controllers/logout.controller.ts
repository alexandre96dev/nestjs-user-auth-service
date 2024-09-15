/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Post } from '@nestjs/common';

@Controller()
export class LogoutController {
    @Post()
    async register() {
        return;
    }
}
