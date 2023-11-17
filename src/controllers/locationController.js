import { locationService } from '~/services/locationService'
import { StatusCodes } from 'http-status-codes'

// create location
const createLocation = async (req, res, next) => {
  try {
    const location = await locationService.createLocation(req.query)
    res.status(StatusCodes.CREATED).json(location)
  } catch (error) { next(error) }
}

// get all location
const getLoations = async (req, res, next) => {
  try {
    const locations = await locationService.getLoations()
    res.status(StatusCodes.OK).json(locations)
  } catch (error) { next(error) }
}

// update location
const updateLocation = async (req, res, next) => {
  try {
    const location = await locationService.updateLocation(req.params.id, req.body)
    res.status(StatusCodes.OK).json(location)
  } catch (error) { next(error) }
}

// delete location
const deleteLocation = async (req, res, next) => {
  try {
    const location = await locationService.deleteLocation(req.params.id)
    res.status(StatusCodes.OK).json(location)
  } catch (error) { next(error) }
}

export const locationController = {
  createLocation,
  getLoations,
  updateLocation,
  deleteLocation
}
