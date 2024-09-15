import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class RegisterController {
    @Post()
    async register() {
        return;
    }
}
