import { ApiProperty } from "@nestjs/swagger";

export class UserIdDTO{
    @ApiProperty({
        description: 'userId',
    })
    userId: number;
}