import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getResponse(message){
    return { msg: message + ' and return from service'}
  }
}
