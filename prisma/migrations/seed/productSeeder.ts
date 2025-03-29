import prisma from '../../prisma.service';
import { faker } from '@faker-js/faker';

export const randomProduct = () => {
  const product = {
    supplierId: faker.string.uuid(), // Tạo UUID ngẫu nhiên cho supplierId (thay thế faker.datatype.uuid())
    name: faker.commerce.productName(), // Tên sản phẩm ngẫu nhiên
    price: faker.number.int({ min: 10, max: 10000 }) * 1000, // Giá tiền ngẫu nhiên, tròn đến hàng nghìn
    note: faker.commerce.productDescription(), // Ghi chú ngẫu nhiên
    date: faker.date.recent(), // Ngày ngẫu nhiên gần đây
  };
  return product;
};

export const seedProducts = async (count: number) => {
  const products = Array.from({ length: count }).map(() => randomProduct());

  await prisma.product.createMany({
    data: products,
  });

  console.log(`Seeded ${count} Products.`);
};
