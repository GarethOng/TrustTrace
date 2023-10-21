import { Box, Button, Typography } from "@mui/material";

import cerfLogo from '../assets/images/cerf_logo.png';
import progress10 from '../assets/images/progress_10.png';
import React from "react";

const NgoCategory = ({ categoryName, categoryAmountStr, catetoryMilestoneStr, addresses }) => {

  return (<>
    <Box sx={{ display: 'flex', flexDirection: 'column', borderRadius: '16px', backgroundColor: '#f4f4f4', padding: '16px'}}>

      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontSize: '22px', fontWeight: 'bold', fontFamily: 'Cabin' }}>{`${categoryName} Distribution`}</Typography>
          <Box sx={{ height: '8px' }} />
          <img src={progress10} width={300} />
          <Box sx={{ height: '4px' }} />
          <Typography sx={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'Cabin' }}>{categoryAmountStr}</Typography>
          <Typography sx={{ fontSize: '16px', fontFamily: 'Cabin' }}>{catetoryMilestoneStr}</Typography>
        </Box>
        <Box sx={{ marginRight: '200px', marginLeft: 'auto' }}>
          {`FILL IN WITH THE PIE CHART`}
        </Box>
      </Box>

      <Box sx={{ height: '24px' }} />

      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        {addresses.map((address, index) => {

          const addressValue = address.value;
          const addressName = address.name;
          const addressDescription = address.description;
          const addressSendAmount = address.sendAmount;

          return (
            <React.Fragment key={index}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px', height: '360px' }}>
                <Typography sx={{ fontSize: '22px', fontWeight: 'bold', fontFamily: 'Cabin' }}>{addressName}</Typography>
                <Box sx={{ height: '8px' }} />
                <Typography>{addressDescription}</Typography>
                <Typography>{addressSendAmount}</Typography>
                <Box sx={{ height: '8px' }} />
                <Button size="large" variant="outlined" disableElevation={true} sx={{ marginTop: 'auto', marginBottom: '0px' }}>{`Send`}</Button>
              </Box>
            </React.Fragment>
          );

        })}
      </Box>
      

    </Box>
  </>)

};

const Ngo = () => {

  const categories = ['Emergency Medicine', 'Clean Water and Purifiers', 'Manpower'];

  return (

    <Box sx={{ backgroundColor: '#ffffff' }}>

      <Box sx={{ height: '36px', backgroundColor: '#1976D2', color: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {`Organization View`}
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>

        <Box sx={{ display: 'flex', flexDirection: 'row' }}>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '22px', fontFamily: 'Cabin', fontWeight: 'bold', maxWidth: '240px', textAlign: 'center' }}>{`Central Emergency Response Fund`}</Typography>
            <Box sx={{ height: '8px' }} />
            <img src={cerfLogo} width={300} height={70} />
          </Box>

          <Box sx={{ width: '64px' }} />

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>

            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: '22px', fontFamily: 'Cabin', fontWeight: 'bold' }}>{`Fundraising Summary`}</Typography>
                <Box sx={{ height: '4px' }} />
                <Typography sx={{ fontSize: '20px', fontFamily: 'Cabin' }}>{`Emergency Medicine`}</Typography>
                <Typography sx={{ fontSize: '20px', fontFamily: 'Cabin' }}>{`Clean Water and Purifiers`}</Typography>
                <Typography sx={{ fontSize: '20px', fontFamily: 'Cabin' }}>{`Manpower`}</Typography>
              </Box>
              <Box sx={{ width: '32px' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: '22px', fontFamily: 'Cabin', fontWeight: 'bold' }}>{`$100,000`}</Typography>
                <Box sx={{ height: '4px' }} />
                <Typography sx={{ fontSize: '20px', fontFamily: 'Cabin' }}>{`$40,000`}</Typography>
                <Typography sx={{ fontSize: '20px', fontFamily: 'Cabin' }}>{`$40,000`}</Typography>
                <Typography sx={{ fontSize: '20px', fontFamily: 'Cabin' }}>{`$20,000`}</Typography>
              </Box>
              <Box sx={{ width: '32px' }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ height: '8px' }}/>
                <img src={progress10} width={300} />
                <Box sx={{ height: '4px' }} />
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
                description: 'North City Hospital is a 1000-bed hospital located in the northern part of the city. It is the largest hospital in the city and has been serving the community for over 50 years.',
                sendAmount: '$40,000'
              },
              {
                value: '0x4Q438ML9UKK1872LW2HXVA1FSTIBXV',
                name: 'North City Hospital',
                description: 'North City Hospital is a 1000-bed hospital located in the northern part of the city. It is the largest hospital in the city and has been serving the community for over 50 years.',
                sendAmount: '$40,000'
              },{
                value: '0x4Q438ML9UKK1872LW2HXVA1FSTIBXV',
                name: 'North City Hospital',
                description: 'North City Hospital is a 1000-bed hospital located in the northern part of the city. It is the largest hospital in the city and has been serving the community for over 50 years.',
                sendAmount: '$40,000'
              },{
                value: '0x4Q438ML9UKK1872LW2HXVA1FSTIBXV',
                name: 'North City Hospital',
                description: 'North City Hospital is a 1000-bed hospital located in the northern part of the city. It is the largest hospital in the city and has been serving the community for over 50 years.',
                sendAmount: '$40,000'
              }
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

  );

};

export default Ngo;