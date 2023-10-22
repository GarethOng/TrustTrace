import { Box, Button, Typography } from '@mui/material'
import 'chart.js/auto'

import progress10 from '../assets/images/progress_10.png'
import React from 'react'
import SupplierCard from './SupplierCard'

const NgoCategory = (
  categoryName,
  categoryAmountStr,
  catetoryMilestoneStr,
  suppliers
) => {
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
              sx={{
                fontSize: '22px',
                fontWeight: 'bold',
                fontFamily: 'Cabin',
              }}
            >
              {categoryName}
            </Typography>
            <Box sx={{ height: '8px' }} />
            <img src={progress10} width={300} />
            <Box sx={{ height: '4px' }} />
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: 'bold',
                fontFamily: 'Cabin',
              }}
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
          {suppliers &&
            suppliers.map((supplier) => {
              const index = suppliers.indexOf(supplier)
              const supplierArrayLength = suppliers.length
              return (
                <SupplierCard
                  name={supplier.name}
                  description={supplier.description}
                  address={supplier.address}
                  index={index}
                  supplierArrayLength={supplierArrayLength}
                />
              )
            })}
        </Box>
      </Box>
    </>
  )
}

export default NgoCategory
