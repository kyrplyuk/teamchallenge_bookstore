import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import configTypeOrm from './ormconfig';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';
import { APP_PIPE } from '@nestjs/core';
import { OrdersModule } from './orders/orders.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configTypeOrm),
    UsersModule,
    ConfigModule.forRoot(),
    BooksModule,
    OrdersModule,
    CategoriesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {}
