import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { userInfo } from "os";

@Schema()
export class UserSetting{
    @Prop({required: false})
    receiveNotification?: boolean; 

    @Prop({required: false})
    receiveEmail?: boolean; 

    @Prop({required: false})
    receiveSms: boolean; 
}

export const userSettingSchema = SchemaFactory.createForClass(UserSetting)