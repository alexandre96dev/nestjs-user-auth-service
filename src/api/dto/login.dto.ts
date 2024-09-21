import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsStrongPassword } from "class-validator";

export class LoginDTO {
    @ApiProperty({
        description: 'username',
    })
    @IsString({message: 'Invalid username'})
    username: string;

    @ApiProperty({
        description: 'password'
    })
    @IsStrongPassword({
        minLength: 8, 
        minLowercase: 1, 
        minNumbers: 1, 
        minSymbols: 1, 
        minUppercase: 1
    }, { message: 'Invalid password' })
    password: string;
}