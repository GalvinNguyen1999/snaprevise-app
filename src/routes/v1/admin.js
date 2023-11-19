import express from 'express'
import { adminController } from '~/controllers/adminController'

const ROUTE = express.Router()

// get all user
ROUTE.route('/get-users')
  .get(adminController.getUsers)

// assign User Role
ROUTE.route('/assign-user-role/:id')
  .put(adminController.assignUserRole)

// assign Admin Role
ROUTE.route('/assign-admin-role/:id')
  .put(adminController.assignAdminRole)

export const adminRoute = ROUTE