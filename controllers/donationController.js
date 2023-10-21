import Donation from '../models/Donation.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../errors/index.js'

const addDonation = async (req, res) => {
  const { hash } = req.body
  if (!hash) {
    throw BadRequestError('Please provide a hash')
  }
  const donation = await Donation.findOne({ hash: hash })
  if (!donation) {
    donation = await Donation.create({ hash: hash })
  }
  res.status(StatusCodes.CREATED).json(donation)
}

const getDonations = async (req, res) => {
  const donations = await Donation.find()
  res.status(StatusCodes.OK).json(donations)
}

export { addDonation, getDonations }
