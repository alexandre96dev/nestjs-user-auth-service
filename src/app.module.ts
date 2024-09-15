import { UserController } from './api/controllers/user.controller';
import { LogoutController } from './api/controllers/logout.controller';
import { LoginController } from './api/controllers/login.controller';
import { RegisterController } from './api/controllers/register.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
        UserController, 
        LogoutController, 
        LoginController, 
        RegisterController, AppController],
  providers: [AppService],
})
export class AppModule {}
