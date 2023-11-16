/* eslint-disable no-console */
import express from 'express'
import cors from 'cors'
import { sequelize } from '~/config/database'
import { env } from '~/config/environment'

const app = express()

const startApp = async () => {
  try {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors())

    app.get('/', (req, res) => {
      res.send('Hello World')
    })

    app.listen(env.APP_PORT, () => {
      console.log(`Server is running on port http://${env.APP_HOST}:${env.APP_PORT}`)
    })
  } catch (error) {
    console.error('Error starting the app:', error)
  }
}

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false })
    console.log('Database connected')
    await startApp()
  } catch (error) {
    console.error('Error synchronizing the database:', error)
    process.exit(0)
  }
}

syncDatabase()
