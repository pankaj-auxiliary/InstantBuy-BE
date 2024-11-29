import Product from '#models/product'

class ProductsService {
  public static getInstance(): ProductsService {
    return new ProductsService()
  }

  public async getProducts(): Promise<Product[]> {
    return await Product.all()
  }

  public async getProductById(id: number): Promise<Product | null> {
    return await Product.query().where('id', id).first()
  }

  public async createProduct(data: any): Promise<Product> {
    return await Product.create(data)
  }

  public async getProductByName(name: string): Promise<Product | null> {
    return await Product.query().where('name', name).first()
  }

  public async getProductByCategory(category: string): Promise<Product[] | null> {
    return await Product.query().where('category', category)
  }

  public async productSearch(query: string): Promise<Product[]> {
    return await Product.query().where('name', 'like', `%${query}%`)
  }
}

export const productsService = ProductsService.getInstance()
