import mongoose from 'mongoose'

const DonationSchema = new mongoose.Schema({
  hash: {
    type: String,
    required: true,
    unique: true,
  },
})

export default mongoose.model('Donation', DonationSchema)
