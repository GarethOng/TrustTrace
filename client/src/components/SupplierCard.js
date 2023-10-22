import { Box, Button, Typography } from '@mui/material'

import React from 'react'

const SupplierCard = (
  { name, address, description },
  index,
  supplierArrayLength
) => {
  return (
    <React.Fragment key={index}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px',
          height: '360px',
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
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: 'Cabin',
          }}
        >
          {'Address' + address}
        </Typography>
        <Box sx={{ height: '8px' }} />
        <Typography sx={{ fontSize: '16px', fontFamily: 'Cabin' }}>
          {description}
        </Typography>
        <Box sx={{ height: '8px' }} />
        <Button
          size='large'
          variant='contained'
          disableElevation={true}
          sx={{ marginBottom: '0px', fontFamily: 'Cabin' }}
        >{`Send`}</Button>
      </Box>
      {supplierArrayLength - 1 !== index && <Box sx={{ width: '48px' }} />}
    </React.Fragment>
  )
}
