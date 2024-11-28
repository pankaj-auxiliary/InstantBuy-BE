/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
const UsersController = () => import('#controllers/users_controller')

import router from '@adonisjs/core/services/router'

router.get('users', [UsersController, 'index'])
router.post('users', [UsersController, 'create'])
router.post('login', [UsersController, 'login'])

const ProductsController = () => import('#controllers/products_controller')
router.get('products', [ProductsController, 'index'])
router.post('products', [ProductsController, 'create'])
router.get('products/:id', [ProductsController, 'show'])
router.put('products/:id', [ProductsController, 'update'])
router.delete('products/:id', [ProductsController, 'delete'])
router.get('products/category/:category', [ProductsController, 'getProductByCategory'])
