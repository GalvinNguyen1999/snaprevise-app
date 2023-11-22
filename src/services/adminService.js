import { userModel } from '~/models/userModel'
import { locationModel } from '~/models/locationModel'

const assignAdminRole = async (id) => {
  try {
    const user = await userModel.assignAdminRole(id)
    return user
  } catch (error) { throw new Error(error) }
}

const assignUserRole = async (id) => {
  try {
    const user = await userModel.assignUserRole(id)
    return user
  } catch (error) { throw new Error(error) }
}

const getUsers = async () => {
  try {
    const users = await userModel.getUsers()
    return users
  } catch (error) { throw new Error(error) }
}

const updateStatus = async (id, data) => {
  try {
    const { status } = data
    const newStatus = await locationModel.updateStatus(id, status)
    return newStatus
  } catch (error) { throw new Error(error) }
}

export const adminService = {
  assignAdminRole,
  assignUserRole,
  getUsers,
  updateStatus
}
