import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('\u{1F680}\u{1F680} Listen Run ...');
  console.log('\u{1F615}\u{1F615}\u{1F615} Aplication port 3000');
}
bootstrap();
