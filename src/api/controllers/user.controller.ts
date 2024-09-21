/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Patch } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get(':userId')
    async getUserInfoById() {
        return;
    }

    @Get(':userId/permissions')
    async getUserPermissionsById() {
        return;
    }

    @Patch(':userId/permissions')
    async updateUserPermissionsByUserId() {
        return;
    }
}
