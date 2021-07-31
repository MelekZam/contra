import { Model } from 'mongoose'
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDTO } from 'src/auth/dto/create-user.dto';
import { LoginUserDTO } from 'src/auth/dto/login.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('user') private readonly userModel:Model<UserDocument>) {}

    // async findAll(): Promise<User[]> {
    //     try {
    //         return await this.userModel.find();
    //     } catch (error) {
    //         throw(error)
    //     }
    // }

    async findByEmail(email: string): Promise<User> {
        try {
            return await this.userModel.findOne({email})
        } catch (error) {
            throw(error)
        }
    }

    async findByUsername(username: string): Promise<User> {
        try {
            return await this.userModel.findOne({username})
        } catch (error) {
            throw(error)
        }
    }

    async create(createUserDTO: CreateUserDTO): Promise<User> {
        const newUser = new this.userModel(createUserDTO)
        try {
            return await newUser.save()
        } catch (error) {
            throw(error)
        }
    }

}
