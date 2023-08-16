import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserType } from './types/user.type';

@Injectable()
export class UsersService {
  constructor(
    private dataSourse: DataSource,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  accessControl(currentUser: UserEntity, id: string): void {
    if (currentUser.id !== id) {
      throw new ForbiddenException(
        `Access for update is allowed only user with id '${id}'`,
      );
    }
  }

  async findOne(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('ID is not valid');
    }
    return user;
  }

  async getUser(currentUser: UserEntity): Promise<UserType> {
    const user = await this.findOne(currentUser.id);
    const { password, ...result } = user;
    return result;
  }

  async updateUser(
    currentUser: UserEntity,
    dataForUpdateUser: UpdateUserDto,
  ): Promise<UserEntity> {
    const user = await this.findOne(currentUser.id);
    Object.assign(user, dataForUpdateUser);
    return this.userRepository.save(user);
  }

  async removeUser(currentUser: UserEntity) {
    return this.userRepository.delete({ id: currentUser.id });
  }
}
