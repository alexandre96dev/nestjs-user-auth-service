import { ApiProperty } from '@nestjs/swagger' 
import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class RegisterDTO {
    @ApiProperty({
        description: 'username',
        example: 'your-username',
        required: true
    })
    @IsString({message: 'Invalid email'})
    username: string;
    
    @ApiProperty({
        description: 'password',
        example: 'your-password'
    })
    @IsStrongPassword({
        minLength: 8, 
        minLowercase: 1, 
        minNumbers: 1, 
        minSymbols: 1, 
        minUppercase: 1
    }, { message: 'Invalid password' })
    password: string;
    
    @ApiProperty({
        description: 'password',
        example: 'your-password'
    })
    @IsString({message: 'Invalid email'})
    @IsEmail({}, {message: 'Invalid email'})  
    email: string;
}