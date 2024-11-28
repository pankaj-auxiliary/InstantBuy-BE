import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, beforeSave, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { AccessToken, DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export enum UserRole {
  BUYER = 'buyer',
  SELLER = 'seller',
  DELIVERY_PARTNER = 'delivery_partner',
}

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare first_name: string

  @column()
  declare last_name?: string

  @column()
  declare email: string

  @column()
  declare phone_number: string | null

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @column()
  declare role: UserRole

  @column.dateTime()
  declare password_last_updated_at: DateTime

  @beforeSave()
  static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password_last_updated_at = DateTime.now()
    }
  }

  static accessTokens = DbAccessTokensProvider.forModel(User)
}
