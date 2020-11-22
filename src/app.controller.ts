import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Ctx, MessagePattern, NatsContext, Payload } from '@nestjs/microservices'

@Controller()
export class AppController {
  private logger = new Logger('MicroService')
  constructor(private readonly appService: AppService) {}

  @MessagePattern('message')
  async getHello(@Payload() data: any, @Ctx() context: NatsContext) {
    this.logger.log('message received')
    this.logger.log(`received: ${JSON.stringify(data)}`)
    this.logger.log(context)
    const response = this.appService.getResponse(data)
    this.logger.log(`returning: ${JSON.stringify(response)}`)
    return response
  }
}
