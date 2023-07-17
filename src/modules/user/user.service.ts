import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async signup(createUserDto: CreateUserDto) {
    const user = await this.findByEmail(createUserDto.email);
    // if (user.length > 0) {
    //   throw new BadRequestException('Email already exists');
    // }
    return await this.userRepository.save(createUserDto);
  }

  signin() {
    return 'signin';
  }
  getAllUser() {
    return this.userRepository.find();
  }

  findByEmail(email: string) {
    console.log('email: ', email);
    return this.userRepository.findOne({ where: { email } });
  }

  findById(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }
}
