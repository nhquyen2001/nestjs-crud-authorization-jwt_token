import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  getUser(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  findByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }

  delete(id: number) {
    return this.usersRepository.delete(id);
  }
}
