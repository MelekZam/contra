import { Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get(':id')
    findByUsername(@Param() params): string {
        return params.id
    }
    
    // @Get()
    // async findAll(): Promise<User[]> {
    //     return await this.userService.findAll();
    // }
    
}
