import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RegisterDTO } from '../dto/register.dto';

@ApiTags('Register')
@Controller('register')
export class RegisterController {
    @Post()
    async register(@Body() body: RegisterDTO) {
        return body;
    }
}
