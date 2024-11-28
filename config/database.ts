import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'
import fs from 'fs'

const dbConfig = defineConfig({
  connection: 'postgres',
  connections: {
    postgres: {
      client: 'pg',
      connection: {
        host: env.get('DB_HOST'),
        port: env.get('DB_PORT'),
        user: env.get('DB_USER'),
        password: env.get('DB_PASSWORD'),
        database: env.get('DB_DATABASE'),
        ssl: {
          rejectUnauthorized: false,
          ca: fs
            .readFileSync(env.get('CA_CERT_FILE') || '/home/pankajsingh/Downloads/ca.pem')
            .toString(),
        },
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig
