import { Box, Button, Typography } from '@mui/material'
import 'chart.js/auto'
import { Pie } from 'react-chartjs-2'

import cerfLogo from '../assets/images/cerf_logo.png'
import progress10 from '../assets/images/progress_10.png'
import React from 'react'

import { fetchCampaignData } from '../utilities/rpc-interface'
import {
  getAllDonationAddresses,
  getSuppliers,
} from '../utilities/database-interface'
import { useEffect, useState, useCallback } from 'react'

const NgoCategory = ({
  categoryName,
  categoryAmountStr,
  catetoryMilestoneStr,
  addresses,
}) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '16px',
          backgroundColor: '#f4f4f4',
          padding: '16px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{ fontSize: '22px', fontWeight: 'bold', fontFamily: 'Cabin' }}
            >{`${categoryName} Distribution`}</Typography>
            <Box sx={{ height: '8px' }} />
            <img src={progress10} width={300} />
            <Box sx={{ height: '4px' }} />
            <Typography
              sx={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'Cabin' }}
            >
              {categoryAmountStr}
            </Typography>
            <Typography sx={{ fontSize: '16px', fontFamily: 'Cabin' }}>
              {catetoryMilestoneStr}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ height: '24px' }} />

        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          {addresses.map((address, index) => {
            const addressValue = address.value
            const addressName = address.name
            const addressDescription = address.description
            const addressSendAmount = address.sendAmount

            return (
              <React.Fragment key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '16px',
                    minHeight: '360px',
                    backgroundColor: '#d9ebfc',
                    borderRadius: '16px',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '21px',
                      fontWeight: 'bold',
                      fontFamily: 'Cabin',
                    }}
                  >
                    {addressName}
                  </Typography>
                  <Box sx={{ height: '8px' }} />
                  <Typography sx={{ fontSize: '16px', fontFamily: 'Cabin' }}>
                    {addressDescription}
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: 'auto',
                      marginBottom: '8px',
                      fontSize: '23px',
                      fontWeight: 'bold',
                      fontFamily: 'Cabin',
                    }}
                  >
                    {addressSendAmount}
                  </Typography>
                  <Box sx={{ height: '8px' }} />
                  <Button
                    size='large'
                    variant='contained'
                    disableElevation={true}
                    sx={{ marginBottom: '0px', fontFamily: 'Cabin' }}
                  >{`Send`}</Button>
                </Box>
                {addresses.length - 1 !== index && (
                  <Box sx={{ width: '48px' }} />
                )}
              </React.Fragment>
            )
          })}
        </Box>
      </Box>
    </>
  )
}

const Ngo = () => {
  const categories = [
    'Food and Water Supplies',
    'Medical Supplies',
    'Infrastructure',
    'Search and Rescue',
    'Temporary Shelters',
  ]

  const [campaignData, setCampaignData] = useState(null)
  const [dataFetched, setDataFetched] = useState(false)
  useEffect(() => {
    async function fetchSuppliers(campaignData) {
      for (let i = 0; i < 5; i++) {
        campaignData.allowedRecipients[i] = await getSuppliers(
          campaignData.allowedRecipients[i]
        )
      }
    }
    async function fetchData() {
      const campaignData = await fetchCampaignData(
        '0x34a60D98966B88B90A275b039DB2fBC2fFCf50A8'
      )
      await fetchSuppliers(campaignData)
      setCampaignData(campaignData)
      setDataFetched(true)
    }
    fetchData()
  }, [])

  return (
    <Box sx={{ backgroundColor: '#ffffff' }}>
      <Box
        sx={{
          height: '36px',
          backgroundColor: '#1976D2',
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {`Organization View`}
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '22px',
                fontFamily: 'Cabin',
                fontWeight: 'bold',
                maxWidth: '240px',
                textAlign: 'center',
              }}
            >{`Central Emergency Response Fund`}</Typography>
            <Box sx={{ height: '8px' }} />
            <img src={cerfLogo} width={300} height={70} />
          </Box>

          <Box sx={{ width: '64px' }} />

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  sx={{
                    fontSize: '22px',
                    fontFamily: 'Cabin',
                    fontWeight: 'bold',
                  }}
                >{`Fundraising Summary`}</Typography>
                <Box sx={{ height: '4px' }} />
                <Typography
                  sx={{ fontSize: '20px', fontFamily: 'Cabin' }}
                >{`Emergency Medicine`}</Typography>
                <Typography
                  sx={{ fontSize: '20px', fontFamily: 'Cabin' }}
                >{`Clean Water and Purifiers`}</Typography>
                <Typography
                  sx={{ fontSize: '20px', fontFamily: 'Cabin' }}
                >{`Manpower`}</Typography>
              </Box>
              <Box sx={{ width: '32px' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  sx={{
                    fontSize: '22px',
                    fontFamily: 'Cabin',
                    fontWeight: 'bold',
                  }}
                >{`$100,000`}</Typography>
                <Box sx={{ height: '4px' }} />
                <Typography
                  sx={{ fontSize: '20px', fontFamily: 'Cabin' }}
                >{`$40,000`}</Typography>
                <Typography
                  sx={{ fontSize: '20px', fontFamily: 'Cabin' }}
                >{`$40,000`}</Typography>
                <Typography
                  sx={{ fontSize: '20px', fontFamily: 'Cabin' }}
                >{`$20,000`}</Typography>
              </Box>
              <Box sx={{ width: '32px' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ height: '8px' }} />
                <img src={progress10} width={300} />
                <Box sx={{ height: '4px' }} />
                <Typography
                  sx={{ fontSize: '16px', fontFamily: 'Cabin' }}
                >{`10% of 1M goal raised`}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box sx={{ height: '24px' }} />
          <NgoCategory
            categoryName={'Emergency Medicine'}
            categoryAmountStr={'$40,000'}
            catetoryMilestoneStr={'10% of $400,000 goal raised'}
            addresses={[
              {
                value: '0x4Q438ML9UKK1872LW2HXVA1FSTIBXV',
                name: 'North City Hospital',
                description:
                  'North City Hospital is a 1000-bed hospital located in the northern part of the city. It is the largest hospital in the city and has been serving the community for over 50 years.',
                sendAmount: '$40,000',
              },
              {
                value: '0x4Q438ML9UKK1872LW2HXVA1FSTIBXV',
                name: 'North City Hospital',
                description:
                  'North City Hospital is a 1000-bed hospital located in the northern part of the city. It is the largest hospital in the city and has been serving the community for over 50 years.',
                sendAmount: '$40,000',
              },
              {
                value: '0x4Q438ML9UKK1872LW2HXVA1FSTIBXV',
                name: 'North City Hospital',
                description:
                  'North City Hospital is a 1000-bed hospital located in the northern part of the city. It is the largest hospital in the city and has been serving the community for over 50 years.',
                sendAmount: '$40,000',
              },
              {
                value: '0x4Q438ML9UKK1872LW2HXVA1FSTIBXV',
                name: 'North City Hospital',
                description:
                  'North City Hospital is a 1000-bed hospital located in the northern part of the city. It is the largest hospital in the city and has been serving the community for over 50 years.',
                sendAmount: '$40,000',
              },
            ]}
          />

          <Box sx={{ height: '24px' }} />
          <NgoCategory
            categoryName={'Clean Water and Purifiers'}
            categoryAmountStr={'$40,000'}
            catetoryMilestoneStr={'10% of $400,000 goal raised'}
            addresses={[]}
          />

          <Box sx={{ height: '24px' }} />
          <NgoCategory
            categoryName={'Manpower'}
            categoryAmountStr={'$20,000'}
            catetoryMilestoneStr={'10% of $200,000 goal raised'}
            addresses={[]}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Ngo
