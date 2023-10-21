import { Box, Typography } from "@mui/material";

import cerfLogo from '../assets/images/cerf_logo.png';

const Ngo = () => {

  return (

    <Box sx={{ backgroundColor: '#ffffff' }}>

      <Box sx={{ height: '36px', backgroundColor: '#1976D2', color: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {`Organization View`}
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>

        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <img src={cerfLogo} width={300} />
          <Box sx={{ width: '64px' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>

            <Typography sx={{ fontSize: '22px', fontFamily: 'Cabin', fontWeight: 'bold' }}>{`Fundraising Summary`}</Typography>
            <Box sx={{ height: '4px' }} />

            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: '20px', fontFamily: 'Cabin' }}>{`Emergency Medicine`}</Typography>
                <Typography sx={{ fontSize: '20px', fontFamily: 'Cabin' }}>{`Clean Water and Purifiers`}</Typography>
                <Typography sx={{ fontSize: '20px', fontFamily: 'Cabin' }}>{`Manpower`}</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: '20px', fontFamily: 'Cabin' }}>{`25%`}</Typography>
                <Typography sx={{ fontSize: '20px', fontFamily: 'Cabin' }}>{`5%`}</Typography>
                <Typography sx={{ fontSize: '20px', fontFamily: 'Cabin' }}>{`Manpower`}</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: '20px', fontFamily: 'Cabin' }}>{`Emergency Medicine`}</Typography>
                <Typography sx={{ fontSize: '20px', fontFamily: 'Cabin' }}>{`Clean Water and Purifiers`}</Typography>
                <Typography sx={{ fontSize: '20px', fontFamily: 'Cabin' }}>{`Manpower`}</Typography>
              </Box>
            </Box>

          </Box>
        </Box>

        <Box>

        </Box>

      </Box>

    </Box>

  );

};

export default Ngo;