import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getResponse(data){
    return {msg: data.msg + ' and return from service'}
  }
}
