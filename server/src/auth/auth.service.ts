import { Injectable, NotFoundException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../users/entities/user.entity';
import { PayloadCreate } from './types/payload.create.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findOneByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { email },
    });
    if (!user) {
      throw new NotFoundException('Email is not valid');
    }
    return user;
  }

  async createUser(dataForCreateUser: CreateUserDto): Promise<UserEntity> {
    const user = this.userRepository.create(dataForCreateUser);
    const rezult = await this.userRepository.save(user);
    return rezult;
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserEntity | null> {
    const user = await this.findOneByEmail(email);
    const isPasswordCorrect = await compare(password, user.password);
    if (!isPasswordCorrect) {
      return null;
    }
    return user;
  }

  async login(userId: string): Promise<string> {
    const payload: PayloadCreate = {
      sub: userId,
    };
    return this.jwtService.sign(payload);
  }
}
