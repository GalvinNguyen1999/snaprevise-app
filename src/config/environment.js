import 'dotenv/config.js'

export const env = {
  APP_PORT: process.env.APP_PORT,
  APP_HOST: process.env.APP_HOST,
  POSTGRESQL_USER: process.env.POSTGRESQL_USER,
  POSTGRESQL_NAME: process.env.POSTGRESQL_NAME,
  POSTGRESQL_PASSWOLD: process.env.POSTGRESQL_PASSWOLD,
  POSTGRESQL_PORT: process.env.POSTGRESQL_PORT,
  DIALECT: process.env.DIALECT
}
