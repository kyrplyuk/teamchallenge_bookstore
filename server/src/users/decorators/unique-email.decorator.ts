import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@ValidatorConstraint({
  name: 'IsEmailUnique',
  async: true,
})
@Injectable()
export class IsEmailUnique implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async validate(email: string): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: { email },
    });
    if (user) {
      throw new BadRequestException(`This email "${email}" already used`);
    }

    return true;
  }
}
