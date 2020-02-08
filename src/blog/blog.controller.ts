import { All, Controller, Get, Render } from '@nestjs/common';
const axios = require('axios');
@Controller('blog')
export class BlogController {

  @Get('')
  @Render('blog')
  getHello() {
    return { message: 'Hello world!' };
  }


  @Get('/:id')
  @Render('blogId')
  getblog(){
    return {}
  }
  @All()
  @Render('404')
  get(){
    return {};
  }
}
