// import type { HttpContext } from '@adonisjs/core/http'

import { productsService } from '#services/products services'
import { searchProductValidator } from '#validators/product_search'
import { createProductValidator } from '#validators/products_create_schema'
import { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  public async index({ response }: HttpContext) {
    const products = await productsService.getProducts()
    return response.json({ products })
  }

  public async create({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createProductValidator)

    let existingProduct = await productsService.getProductByName(payload.name)
    if (existingProduct) {
      throw new Error('Product already exist with this name')
    }
    const product = await productsService.createProduct(payload)
    return response.json({ data: product })
  }

  public async show({ response, params }: HttpContext) {
    const product = await productsService.getProductById(params.id)
    return response.json({ data: product })
  }

  public async update({ response, params, request }: HttpContext) {
    const payload = await request.validateUsing(createProductValidator)
    const product = await productsService.getProductById(params.id)
    if (!product) {
      throw new Error('Product not found')
    }
    const updatedProduct = await productsService.createProduct(payload)
    return response.json({ data: updatedProduct })
  }

  public async delete({ response, params }: HttpContext) {
    const product = await productsService.getProductById(params.id)
    if (!product) {
      throw new Error('Product not found')
    }
    await product.delete()
    return response.json({ data: product })
  }

  public async getProductsByCategory({ response, params }: HttpContext) {
    const products = await productsService.getProductByCategory(params.category)
    return response.json({ data: products })
  }

  public async search({ response, request }: HttpContext) {
    const payload = await request.validateUsing(searchProductValidator)
    const products = await productsService.productSearch(payload.query)
    return response.json({ data: products })
  }
}
