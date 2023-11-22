import express from 'express'
import { adminController } from '~/controllers/adminController'

const ROUTE = express.Router()

ROUTE.route('/get-users')
  .get(adminController.getUsers)

ROUTE.route('/assign-user-role/:id')
  .put(adminController.assignUserRole)

ROUTE.route('/assign-admin-role/:id')
  .put(adminController.assignAdminRole)

ROUTE.route('/update-status/:id')
  .put(adminController.updateStatus)

export const adminRoute = ROUTE