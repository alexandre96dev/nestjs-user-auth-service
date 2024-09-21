import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LogoutDTO {
    @ApiProperty({
        description: 'token',
    })
    @IsString({message: 'Invalid token'})
    token: string;
}