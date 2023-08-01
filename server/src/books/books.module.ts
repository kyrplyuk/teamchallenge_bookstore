import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './entities/book.entity';
import { IsIsbnUnique } from 'src/books/decorators/unique-isbn.decorator';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  providers: [BooksService, IsIsbnUnique],
  controllers: [BooksController],
})
export class BooksModule {}
