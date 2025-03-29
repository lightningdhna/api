import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import prisma from 'prisma/prisma.service';
import test from './test';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.listen(process.env.PORT ?? 3000);
  console.log(prisma)
  const value = await prisma.user.findMany();
  console.log(value)
  await test(); // Gọi hàm test() để thêm sản phẩm thử nghiệm

}
bootstrap();
