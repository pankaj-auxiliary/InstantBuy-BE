import User from '#models/user'
import { CreateUserDTO } from '../DTO/users.js'

class UserService {
  public static getInstance(): UserService {
    return new UserService()
  }

  public async getUsers(): Promise<User[]> {
    return await User.all()
  }

  public async createUser(data: CreateUserDTO): Promise<User> {
    return await User.create(data)
  }

  public async getUserByEmail(email: string): Promise<User | null> {
    return await User.query().where('email', email).first()
  }

  public async loginUser(payload: { email: string; password: string }): Promise<User> {
    const user = await User.verifyCredentials(payload.email, payload.password)
    return user
  }
}

export const userService = UserService.getInstance()
