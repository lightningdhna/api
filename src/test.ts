import prisma from 'prisma/prisma.service';
import { Product } from '@prisma/client'; // Import kiểu dữ liệu từ Prisma

const test = async () => {
  console.log('Adding a new product...');

  const productData = {
    name: 'Sản phẩm thử nghiệm',
    supplierId: 'supplier-001',
    price: 100000, // Giá tiền là số nguyên
    note: 'Sản phẩm thử nghiệm',
    date: new Date(), // Ngày hiện tại
  };

  const newProduct = await prisma.product.create({
    data: productData,
  });

  console.log('Product added:', newProduct);

  return newProduct;
};

export default test;
