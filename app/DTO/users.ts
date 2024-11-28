import { UserRole } from '#models/user'

export interface CreateUserDTO {
  first_name: string
  last_name?: string
  email: string
  password: string
  phone_number: string | null
  role: UserRole
}
