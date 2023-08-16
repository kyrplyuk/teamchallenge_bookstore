import {
  IsEnum,
  IsISBN,
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
  Validate,
} from 'class-validator';
import { IsIsbnUnique } from 'src/books/decorators/unique-isbn.decorator';
import { BookStatus } from '../configs/ book.status.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly author: string;

  @IsISBN()
  @Validate(IsIsbnUnique)
  readonly isbn: string;

  @IsInt()
  @Min(0)
  readonly price: number;

  @IsEnum(BookStatus)
  readonly isInSale: string;
}
