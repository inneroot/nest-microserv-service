import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';


const MicroserviceOptions = {
  transport: Transport.NATS,
  options: {
    url: 'nats://localhost:4222',
  },
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, MicroserviceOptions);
  app.listen(() => console.log('Microservice is listening...'));
}

bootstrap();
