//import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-book.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
