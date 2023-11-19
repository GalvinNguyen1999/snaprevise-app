import { adminService } from '~/services/adminService'
import { StatusCodes } from 'http-status-codes'

// get all user
const getUsers = async (req, res, next) => {
  try {
    const users = await adminService.getUsers()
    return res.status(StatusCodes.OK).json(users)
  } catch (error) { next(error) }
}

// assign Admin Role
const assignAdminRole = async (req, res, next) => {
  try {
    const user = await adminService.assignAdminRole(req.params.id)
    return res.status(StatusCodes.OK).json(user)
  } catch (error) { next(error) }
}

// assign User Role
const assignUserRole = async (req, res, next) => {
  try {
    const user = await adminService.assignUserRole(req.params.id)
    return res.status(StatusCodes.OK).json(user)
  } catch (error) { next(error) }
}

export const adminController = {
  getUsers,
  assignAdminRole,
  assignUserRole
}
