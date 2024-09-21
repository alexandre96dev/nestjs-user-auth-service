import { ApiProperty } from "@nestjs/swagger";
import { IsArray } from "class-validator";

export class PermissionDTO {
    @ApiProperty({
        description: 'permissions'
    })
    @IsArray({message: 'Invalid permissions'})
    permissions: string[]
}