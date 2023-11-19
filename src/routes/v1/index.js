import express from 'express'
import { locationRoute } from '~/routes/v1/locationRoute'
import { userRoute } from '~/routes/v1/userRoute'
import { authRoute } from '~/routes/v1/authRoute'
import { adminRoute } from '~/routes/v1/admin'

const ROUTE = express.Router()

// Test status API_V1 route
ROUTE.get('/status', (req, res) => {
  res.send('API_V1 OK')
})

// Auth API_V1 route
ROUTE.use('/auth', authRoute)

// Admin API_V1 route
ROUTE.use('/admin', adminRoute)


// User API_V1 route
ROUTE.use('/user', userRoute)

// Location API_V1 route
ROUTE.use('/location', locationRoute)

export const APIs_V1 = ROUTE
