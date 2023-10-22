import Supplier from '../models/Supplier'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../errors/index.js'

const addSupplier = async (req, res) => {
  const { name, address, description } = req.body
  if (!name || !address || !description) {
    throw BadRequestError('Please provide all the required fields')
  }
}

const getSuppliers = async (req, res) => {
  const suppliers = await Supplier.find()
  res.status(StatusCodes.OK).json(suppliers)
}

export { addSupplier, getSuppliers }
