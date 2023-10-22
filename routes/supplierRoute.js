import express from 'express'
const router = express.Router()
import { addSupplier, getSupplier } from '../controllers/supplierController.js'

router.route('/add').post(addSupplier)
router.route('/get').post(getSupplier)

export default router
