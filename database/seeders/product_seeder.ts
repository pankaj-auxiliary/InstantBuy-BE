import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'
import Product from '#models/product'
import { faker } from '@faker-js/faker'

export default class ProductSeeder extends BaseSeeder {
  async run() {
    const products = []

    for (let i = 0; i < 10; i++) {
      products.push({
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.number.int({ min: 0, max: 100, multipleOf: 9 }),
        cover_image: faker.image.url(),
        category: faker.commerce.department(),
        images: [faker.image.url(), faker.image.url(), faker.image.url()],
        stock: faker.number.int({ min: 0, max: 100 }),
        createdAt: DateTime.local(),
        updatedAt: DateTime.local(),
      })
    }

    await Product.createMany(products)
  }
}
