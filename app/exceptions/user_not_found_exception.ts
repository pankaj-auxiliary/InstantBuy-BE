import { Exception } from '@adonisjs/core/exceptions'

export default class UserNotFoundException extends Exception {
  constructor() {
    super('User does not exist.', {
      code: '404',
    })
  }
}
