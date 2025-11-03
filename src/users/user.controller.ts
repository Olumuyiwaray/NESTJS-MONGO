import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { log } from "console";
import mongoose from "mongoose";
import { UpdateUserDto } from "./dto/updateUser.dto";

@Controller('user')
export class UserController{
    constructor(private userService: UserService){}

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto: CreateUserDto){
        console.log(createUserDto);
        return this.userService.createUser(createUserDto);  
    }
    @Get()
    getUsers(){
        return this.userService.getUsers()
    }

    @Get(':id')
    async getUserById(@Param('id') id: string){
        const isValid = mongoose.Types.ObjectId.isValid(id);

        if(!isValid) throw new HttpException('User not found', 404); 

        const findUser = await this.userService.getUserById(id)
        if(!findUser) throw new HttpException('User not found', 404); 
        return findUser; 
    }

    @Patch('id')
    @UsePipes(new ValidationPipe())
    async updateUserById(@Param('id') id: string, @Body()updateUserDto: UpdateUserDto){
        const isValid = mongoose.Types.ObjectId.isValid(id);

        if(!isValid) throw new HttpException('Invalid Id', 404); 

        const updateUser = await this.userService.updateIserById(id, updateUserDto); 
        if(!updateUser) throw new HttpException('User not found', 404)
        return updateUser; 
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string){
        const isValid = mongoose.Types.ObjectId.isValid(id); 
        if(!isValid) throw new HttpException('Invalid Id', 404)
        
        const deleteById = await this.userService.deleteUser(id); 
        if(!deleteById) throw new HttpException('User not found now', 404)
    }
}