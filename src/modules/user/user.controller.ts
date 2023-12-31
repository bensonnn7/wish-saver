import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Public } from '../auth/public.decorator';

// Guard without passport
// import { AuthGuard } from '../auth/example.auth.guard'
// @UseGuards(AuthGuard)
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService, // private readonly authService: AuthService,
  ) {}

  // @Public()
  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto) {
    return this.userService.emailSignup(createUserDto);
  }

  
  @Get()
  getAllUser(@Request() req) {
    console.log(req.user);
    return this.userService.getAllUser();
  }

  @Public()
  @Get('test')
  getProfile() {
    return '123';
  }
}
