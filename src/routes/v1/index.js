import express from 'express'
import { locationRoute } from '~/routes/v1/locationRoute'
import { userRoute } from '~/routes/v1/userRoute'
import { authRoute } from '~/routes/v1/authRoute'
import { adminRoute } from '~/routes/v1/adminRoute'

const ROUTE = express.Router()


ROUTE.use('/auth', authRoute)

ROUTE.use('/admin', adminRoute)

ROUTE.use('/user', userRoute)

ROUTE.use('/location', locationRoute)

export const APIs_V1 = ROUTE
