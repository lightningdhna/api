import { PrismaClient } from '@prisma/client'; // Import Prisma Client
import { seedProducts } from './migrations/seed/productSeeder';

const prisma = new PrismaClient(); // Khởi tạo Prisma Client

async function main() {
  console.log('Seeding database...');

  await seedProducts(10); // Seed 10 sản phẩm

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect(); // Ngắt kết nối Prisma Client
  });
