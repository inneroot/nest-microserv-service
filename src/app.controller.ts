import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices'

@Controller()
export class AppController {
  private logger = new Logger('MicroService')
  constructor(private readonly appService: AppService) {}

  @MessagePattern('message')
  async getHello(data: string) {
    this.logger.log(`reseaved: ${data}`)
    const response = this.appService.getResponse(data)
    this.logger.log(`returning: ${response}`)
    return response
  }
}
