import { Body, Controller, Post, Res } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from 'src/user/schemas/user.schema'
import { AuthService } from './auth.service';
import { LoginUserDTO } from './dto/login.dto';
import { Response } from 'express'

@Controller()

export class AuthController {
    
    constructor(private authService: AuthService) {}

    @Post('signup')
    async signup(@Body() createUserDTO: CreateUserDTO): Promise<String>{
        return await this.authService.register(createUserDTO)
    }
    @Post('signin')
    async signin(@Body() loginUserDTO: LoginUserDTO, @Res({ passthrough: true }) response: Response): Promise<Object>{
        return await this.authService.login(loginUserDTO, response)
    }
}
