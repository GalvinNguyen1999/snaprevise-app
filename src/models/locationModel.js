// Define the Location model
import { DataTypes } from 'sequelize'
import { GET_DB } from '~/config/database'
import { sequelize } from '~/config/database'

// Define the Location model
const locations = sequelize.define('locations', {
  name: {
    type: DataTypes.STRING
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING
  },
  type: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.STRING
  }
})

// locations.beforeCreate((location) => {
//   location.location = { type: 'Point', coordinates: [location.latitude, location.longitude] };
// });

// create new location
const createLocation = async (data) => {
  try {
    const location = await GET_DB().locations.create({
      ...data,
      status: 'pending'
    })

    return location
  } catch (error) { throw new Error(error) }
}

// get all location
const getLoations = async () => {
  try {
    const locations = await GET_DB().locations.findAll()
    return locations
  } catch (error) { throw new Error(error) }
}

// update location
const updateLocation = async (id, data) => {
  try {
    const location = await GET_DB().locations.update(data, { where: { id } })
    return location
  } catch (error) { throw new Error(error) }
}

// delete location
const deleteLocation = async (id) => {
  try {
    const location = await GET_DB().locations.destroy({ where: { id } })
    return location
  } catch (error) { throw new Error(error) }
}

export const locationModel = {
  locations,
  createLocation,
  getLoations,
  updateLocation,
  deleteLocation
}
