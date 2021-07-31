import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/user/schemas/user.schema';
import { UserService } from 'src/user/user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginUserDTO } from './dto/login.dto';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async register(createUserDTO: CreateUserDTO): Promise<String> {

        const byUsername = await this.userService.findByUsername(createUserDTO.username);
        if (byUsername) throw new ConflictException("Username Already Exists")

        const byEmail = await this.userService.findByEmail(createUserDTO.email);
        if (byEmail) throw new ConflictException("Email Already Exists")

        const hash = await bcrypt.hash(createUserDTO.password, 10)
        const user = this.userService.create({
            username: createUserDTO.username,
            email: createUserDTO.email,
            password: hash,
            elo: 500
        })

        return "success";
    }

    async login(loginUserDTO: LoginUserDTO, response: Response): Promise<Object> {
        const user = await this.userService.findByEmail(loginUserDTO.email)

        if (!user) throw new NotFoundException("Invalid Credentials")
        if (!await bcrypt.compare(loginUserDTO.password, user.password)) throw new NotFoundException("Invalid Credentials")

        const jwt = this.jwtService.sign({username: user.username})
        response.cookie('jwt', jwt, { httpOnly: true })

        return {
            username: user.username,
            email: user.email,
            elo: user.elo
        };
    }
}
