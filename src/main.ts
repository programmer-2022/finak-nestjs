import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { CORS } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get('PORT');

  app.use(morgan('dev'));

  app.setGlobalPrefix('api');
  app.enableCors(CORS);
  await app.listen(port);
  console.log(`Server running on: ${port}`);
}
bootstrap();
