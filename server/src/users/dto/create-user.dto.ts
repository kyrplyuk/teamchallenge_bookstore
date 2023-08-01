import { IsEmail, IsString, Validate } from 'class-validator';
import { IsEmailUnique } from '../decorators/unique-isbn.decorator';
import { IsPassword } from '../decorators/password.decorator';

export class CreateUserDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly secondName: string;

  @IsEmail()
  @Validate(IsEmailUnique)
  readonly email: string;

  @IsString()
  @IsPassword()
  readonly password: string;
}
