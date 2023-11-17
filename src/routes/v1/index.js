import express from 'express'
import { locationRoute } from '~/routes/v1/locationRoute'

const ROUTE = express.Router()

// Test status API_V1 route
ROUTE.get('/status', (req, res) => {
  res.send('API_V1 OK')
})

// Location API_V1 route
ROUTE.use('/location', locationRoute)

export const APIs_V1 = ROUTE
