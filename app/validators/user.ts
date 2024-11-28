import { UserRole } from '#models/user'
import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    first_name: vine.string().trim(),
    last_name: vine.string().trim().optional(),
    email: vine.string().email(),
    password: vine.string(),
    phone_number: vine.string().nullable(),
    role: vine.enum(Object.values(UserRole)),
  })
)

export const LoginValidator = vine.compile(
  vine.object({
    email: vine.string().trim(),
    password: vine.string(),
  })
)
