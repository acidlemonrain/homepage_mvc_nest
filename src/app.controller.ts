import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return { message: 'Hello world!' };
  }

  @Get('/life')
  @Render('life')
  get_life(){
    return {}
  }
}
