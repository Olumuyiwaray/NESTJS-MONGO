import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schema/user.schema";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";

@Injectable()
export class UserService{
    constructor(@InjectModel(User.name) private userModel : Model<User>){}  // Model type User   
       
    createUser(CreateUserDto: CreateUserDto){
            const newUser = new this.userModel(CreateUserDto); 
            return newUser.save();
        }

    getUsers(){
        return this.userModel.find()
    }

    getUserById(id: string){
        return this.userModel.findById(id)
    }

    updateIserById(id: string, updateUserDto: UpdateUserDto){
        return this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true})
    }

    deleteUser(id: string){
        return this.userModel.findByIdAndDelete(id)
    }
}