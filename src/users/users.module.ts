import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, userSchema } from "src/schema/user.schema";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserSetting, userSettingSchema } from "src/schema/usersetting.Schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
            name: User.name, 
            schema: userSchema,  
        }, 
        {
            name: UserSetting.name, 
            schema: userSettingSchema, 
        }

    ])
    ], 
    providers: [UserService], 
    controllers: [UserController], 
})
export class UserModule{}