// Set up Sequelize with PostgreSQL database
import Sequelize from 'sequelize'
import { env } from '~/config/environment'

export const sequelize = new Sequelize(
  env.POSTGRESQL_NAME,
  env.POSTGRESQL_USER,
  env.POSTGRESQL_PASSWOLD,
  {
    host: env.APP_HOST,
    dialect: env.DIALECT
  }
)
