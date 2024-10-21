import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  logger.log(`Attempting to listen on port ${port}...`);
  await app.listen(port);
}
bootstrap().catch((error) => console.error(error));
