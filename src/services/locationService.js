import { locationModel } from '~/models/locationModel'
import { instance } from '~/config/axiosConfig'

const createLocation = async (data) => {
  try {
    const { latitude, longitude } = data

    // Make the API request to get location details
    const response = await instance.get('/', { params: { q: `${latitude},${longitude}` } })

    // Extract relevant information from the API response
    const {
      components: { residential: name },
      formatted: address,
      geometry: { lat, lng },
      components: { _type: type }
    } = response.data.results[0]

    const newlocation = await locationModel.createLocation({
      name,
      address,
      type,
      latitude: lat,
      longitude: lng
    })

    return newlocation
  } catch (error) { throw new Error(error) }
}

// get all location
const getLoations = async () => {
  try {
    const locations = await locationModel.getLoations()
    return locations
  } catch (error) { throw new Error(error) }
}

// update location
const updateLocation = async (id, data) => {
  try {
    const location = await locationModel.updateLocation(id, data)
    return location
  } catch (error) { throw new Error(error) }
}

// delete location
const deleteLocation = async (id) => {
  try {
    const location = await locationModel.deleteLocation(id)
    return location
  } catch (error) { throw new Error(error) }
}

export const locationService = {
  createLocation,
  getLoations,
  updateLocation,
  deleteLocation
}