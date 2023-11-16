// Define the Location model
import Sequelize from 'sequelize'
import { sequelize } from '~/config/database'

const locations = sequelize.define('locations', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  latitude: Sequelize.FLOAT,
  longitude: Sequelize.FLOAT,
  address: Sequelize.STRING,
  type: Sequelize.STRING,
  status: Sequelize.STRING
})

export const locationModel = {
  locations
}
