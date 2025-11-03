
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User{
    @Prop({required: [true, 'Username is required'], unique: true})
    username: string;

    @Prop({required: false})
    displayName?: string; 

    @Prop({required: false})
    avatarUrl?: string; 
}

export const userSchema =  SchemaFactory.createForClass(User); 