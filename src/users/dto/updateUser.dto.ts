import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, isString, IsString } from 'class-validator';
import { CreateUserDto } from './createUser.dto';

// export class UpdateUserDto{
//     @IsOptional()
//     @IsString()
//     dispalyName?: string;

//     @IsOptional()
//     @IsString()
//     avatarUrl?: string;
// }

export class UpdateUserDto extends PartialType(CreateUserDto) {}
