import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser())

  app.enableCors({
    credentials: true
  });
  
  const port = process.env.PORT || 5000;
  await app.listen(port);
}
bootstrap();
