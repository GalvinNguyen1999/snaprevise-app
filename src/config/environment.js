import 'dotenv/config.js'

export const env = {
  APP_PORT: process.env.APP_PORT,
  APP_HOST: process.env.APP_HOST,
  OPENCAGE_KEY: process.env.OPENCAGE_KEY,
  OPENCAGE_URL: process.env.OPENCAGE_URL,
  BUILD_MODE: process.env.BUILD_MODE,
  JWT_SECRET: process.env.JWT_SECRET,

  POSTGRESQL_HOST: process.env.POSTGRESQL_HOST,
  POSTGRESQL_USER: process.env.POSTGRESQL_USER,
  POSTGRESQL_NAME: process.env.POSTGRESQL_NAME,
  POSTGRESQL_PASSWORD: process.env.POSTGRESQL_PASSWORD,
  POSTGRESQL_PORT: process.env.POSTGRESQL_PORT,
  DIALECT: process.env.DIALECT
}
