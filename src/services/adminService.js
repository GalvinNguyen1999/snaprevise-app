import { userModel } from '~/models/userModel'

// assign Admin Role
const assignAdminRole = async (id) => {
  try {
    const user = await userModel.assignAdminRole(id)
    return user
  } catch (error) { throw new Error(error) }
}

// assign User Role
const assignUserRole = async (id) => {
  try {
    const user = await userModel.assignUserRole(id)
    return user
  } catch (error) { throw new Error(error) }
}

// get all user
const getUsers = async () => {
  try {
    const users = await userModel.getUsers()
    return users
  } catch (error) { throw new Error(error) }
}

export const adminService = {
  assignAdminRole,
  assignUserRole,
  getUsers
}
