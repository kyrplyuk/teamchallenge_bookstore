import { IsEmail, IsString, Validate } from 'class-validator';
import { IsEmailUnique } from '../decorators/unique-email.decorator';
import { IsPassword } from '../decorators/password.decorator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'First name of the user', nullable: false })
  @IsString()
  readonly firstName: string;

  @ApiProperty({ description: 'Second name of the user', nullable: false })
  @IsString()
  readonly secondName: string;

  @ApiProperty({ description: 'Email of the user', nullable: false })
  @IsEmail()
  @Validate(IsEmailUnique)
  readonly email: string;

  @ApiProperty({ description: 'Password of the user', nullable: false })
  @IsString()
  @IsPassword()
  readonly password: string;
}
