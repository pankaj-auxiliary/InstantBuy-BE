import { Exception } from '@adonisjs/core/exceptions'

export default class ProductsNotFoundException extends Exception {
  static status = 500
}