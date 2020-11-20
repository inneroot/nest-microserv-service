import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getResponse(msg: string){
    return msg + ' and return from service'
  }
}
