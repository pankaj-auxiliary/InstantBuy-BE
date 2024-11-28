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
