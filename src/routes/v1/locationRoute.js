import express from 'express'
import { locationController } from '~/controllers/locationController'

const ROUTE = express.Router()

// Test status API_V1 route
ROUTE.route('/submit-location')
  .post(locationController.createLocation)

// get all location
ROUTE.route('/all-locations')
  .get(locationController.getLoations)

// update location
ROUTE.route('/update-location/:id')
  .put(locationController.updateLocation)

// delete location
ROUTE.route('/delete-location/:id')
  .delete(locationController.deleteLocation)

export const locationRoute = ROUTE
