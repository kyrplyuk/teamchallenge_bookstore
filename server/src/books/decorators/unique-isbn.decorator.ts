import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { BookEntity } from 'src/books/entities/book.entity';
import { Repository } from 'typeorm';

@ValidatorConstraint({
  name: 'IsEmailUnique',
  async: true,
})
@Injectable()
export class IsIsbnUnique implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(BookEntity)
    private readonly userRepository: Repository<BookEntity>,
  ) {}

  async validate(isbn: string): Promise<boolean> {
    const book = await this.userRepository.findOne({
      where: { isbn },
    });
    if (book) {
      throw new BadRequestException(`This email "${book}" already used`);
    }

    return true;
  }
}
