import { IsOptional, isString, IsString } from "class-validator";

export class UpdateUserDto{
    @IsOptional()
    @IsString()
    dispalyName?: string; 

    @IsOptional()
    @IsString()
    avatarUrl?: string; 
}