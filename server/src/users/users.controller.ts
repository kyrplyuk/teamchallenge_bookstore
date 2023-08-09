import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Patch,
  Delete,
  Get,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { RequestWithUser } from './types/user.request.interface';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { UserType } from './types/user.type';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('/create')
  async createCard(@Body() dataForCreateUser: CreateUserDto): Promise<string> {
    const user = await this.authService.createUser(dataForCreateUser);
    return await this.authService.login(user.id);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req: RequestWithUser): Promise<string> {
    return await this.authService.login(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/getuser')
  async getUserByID(@Request() req: RequestWithUser): Promise<UserType> {
    return await this.userService.getUser(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update')
  async update(
    @Request() req: RequestWithUser,
    @Body() dataForUpdateUser: UpdateUserDto,
  ): Promise<string> {
    const userAfterUpdate = await this.userService.updateUser(
      req.user,
      dataForUpdateUser,
    );
    return await this.authService.login(userAfterUpdate.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete')
  async removeCard(@Request() req: RequestWithUser): Promise<DeleteResult> {
    return this.userService.removeUser(req.user);
  }
}
