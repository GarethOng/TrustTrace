import axios from 'axios'

const databaseInterface = axios.create({
  baseURL: '/api/v1',
})

const getAllDonationAddresses = async () => {
  const response = await databaseInterface.get('/donation/get')
  return response.data
}

export { getAllDonationAddresses }
