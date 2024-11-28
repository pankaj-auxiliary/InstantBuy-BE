import User from '#models/user'
import { userService } from '#services/user_service'
import { createUserValidator, LoginValidator } from '#validators/user'
import { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  public async index({ response }: HttpContext) {
    const users = await userService.getUsers()
    return response.json({ data: users })
  }

  public async create({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createUserValidator)

    let existingUser = await userService.getUserByEmail(payload.email)
    if (existingUser) {
      throw new Error('User already exist with this email')
    }

    const user = await userService.createUser(payload)
    return response.json({ data: user })
  }

  public async login({ request, response, auth }: HttpContext) {
    const { email, password } = await request.validateUsing(LoginValidator)

    const user = await User.verifyCredentials(email, password)
    const token = await User.accessTokens.create(user)
    return response.json({ data: user, token })
  }
}
