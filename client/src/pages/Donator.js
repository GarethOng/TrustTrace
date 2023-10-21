import { Chip, Box, Typography, Button } from '@mui/material';
import cerfLogo from '../assets/images/cerf_logo.png';
import media1 from '../assets/images/media1.jpeg';
import progress10 from '../assets/images/progress_10.png';
import logo from '../assets/images/logo.jpg';

const ethers = require('ethers');

const Donator = () => {

  const tags = ['Tsunami', 'Flooding', 'Food Aid', 'Safe Water Supply', 'Medicine'];

  const onDonateClicked = () => {
    
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
      // Create a Web3Provider from the MetaMask provider
      const provider = new ethers.BrowserProvider(window.ethereum);

      // Request MetaMask to enable your application
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          console.log('Connected to MetaMask with account: ', accounts[0]);

          // Create a wallet from the provider
          const wallet = provider.getSigner();

          // Example: Get the connected account's balance
          wallet.getBalance().then((balance) => {
            console.log('Account balance: ', ethers.utils.formatEther(balance));
          });
        })
        .catch((error) => {
          console.error('Error connecting to MetaMask: ', error);
        });
    } else {
      console.error('MetaMask is not installed. Please install MetaMask to use this application.');
    }

  }

  return (

    <Box sx={{ backgroundColor: '#ffffff', padding: '16px', display: 'flex', flexDirection: 'column' }}>

      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <img src={cerfLogo} width={300} height={70} />
        <Box sx={{ marginLeft: 'auto', marginRight: '16px' }} >
          <img src={logo} width={300} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'Cabin' }}>
          {`Unite for Resilience: Together We Can Rebuild, Renew and Restore!`}
        </Typography>
        <Box sx={{ height: '8px' }} />
        <Box>
          {tags.map((tag, index) => (<>
            <Chip key={index} label={tag} variant="contained" color="primary" sx={{ fontFamily: 'Cabin' }} />
            <Box sx={{ width: '6px', display: 'inline-block' }} />
          </>))}
        </Box>
        <Box sx={{ height: '16px' }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <img src={media1} width={800} />
        <Box sx={{ width: '32px' }} />
        <Box>
          <Box sx={{ height: '24px' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <img src={progress10} width={300} />
            <Box sx={{ height: '12px' }} />
            <Typography sx={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'Cabin' }} >{`$100,000`}</Typography>
            <Typography sx={{ fontSize: '16px', fontFamily: 'Cabin' }} >{`10% of 1M goal raised`}</Typography>
          </Box>
          <Box sx={{ height: '24px' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'Cabin' }} >{`560`}</Typography>
            <Typography sx={{ fontSize: '16px', fontFamily: 'Cabin' }} >{`supporters`}</Typography>
          </Box>
          <Box sx={{ height: '24px' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'Cabin' }} >{`15 Days`}</Typography>
            <Typography sx={{ fontSize: '16px', fontFamily: 'Cabin' }} >{`left to support`}</Typography>
          </Box>
          <Box sx={{ height: '24px' }} />
          <Button disableElevation={true} variant="contained" sx={{ fontSize: '16px', fontFamily: 'Cabin' }} onClick={onDonateClicked}>
            {`Donate Online`}
          </Button>
        </Box>
      </Box>

      <Box sx={{ height: '24px' }}></Box>

      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '800px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', borderRadius: '8px', overflow: 'hidden' }} >
            <Box sx={{ backgroundColor: '#1976D2', color: '#ffffff', padding: '8px', display: 'flex', justifyContent: 'center', fontSize: '18px' }}>
              {`Our Goal`}
            </Box>
            <Box sx={{ backgroundColor: '#e0f0ff', padding: '8px' }}>
              {`Join our mission to raise `}<Typography variant='span' sx={{ fontWeight: 'bold' }}>{`$1M for emergency medical aid,`}</Typography>{` providing critical support to the most vulnerable people in the world.`}
            </Box>
          </Box>
          <Box sx={{ height: '24px' }}></Box> 
          <Box sx={{ display: 'flex', flexDirection: 'column', borderRadius: '8px', overflow: 'hidden' }} >
            <Box sx={{ backgroundColor: '#1976D2', color: '#ffffff', padding: '8px', display: 'flex', justifyContent: 'center', fontSize: '18px' }}>
              {`Our Smart Contract`}
            </Box>
            <Box sx={{ backgroundColor: '#e0f0ff', padding: '8px' }}>
              <Box>
                <Typography sx={{ fontWeight: 'bold', fontFamily: 'Cabin' }}>{`Total Amount: $1,000,000`}</Typography>

                <Typography sx={{ fontWeight: 'bold', fontFamily: 'Cabin', marginTop: '4px' }}>{`Category 1: Emergency Medicine - $400,000 (40%)`}</Typography>
                <Typography sx={{ fontFamily: 'Cabin', marginLeft: '8px' }}>{`- 0x4Q438ML9UKK1872LW2HXVA1FSTIBXV (North City Hospital)`}</Typography>
                <Typography sx={{ fontFamily: 'Cabin', marginLeft: '8px' }}>{`- 0xW0QY0CCVC601QZIP9CO1JMWGL1YK3T (Central National Hospital)`}</Typography>
                <Typography sx={{ fontFamily: 'Cabin', marginLeft: '8px' }}>{`- 0xG1PNQ5SER1UE3KRTSY7F9GZIVMAWXX (Clinics Administration)`}</Typography>

                <Typography sx={{ fontWeight: 'bold', fontFamily: 'Cabin', marginTop: '4px' }}>{`Category 2: Clean Water and Purifiers - $400,000 (40%)`}</Typography>
                <Typography sx={{ fontFamily: 'Cabin', marginLeft: '8px' }}>{`- 0x4Q438ML9UKK1872LW2HXVA1FSTIBXV (North City Hospital)`}</Typography>
                <Typography sx={{ fontFamily: 'Cabin', marginLeft: '8px' }}>{`- 0xAJQVTWI6TB3F0U7ICU4WMLXJBTMMR5 (Waterworks Inc.)`}</Typography>
                <Typography sx={{ fontFamily: 'Cabin', marginLeft: '8px' }}>{`- 0x8AGXCQOORSTREBDDPRB96JEVMTFCTD (BigBottle Water Inc.)`}</Typography>

                <Typography sx={{ fontWeight: 'bold', fontFamily: 'Cabin', marginTop: '4px' }}>{`Category 3: Manpower - $200,000 (20%)`}</Typography>
                <Typography sx={{ fontFamily: 'Cabin', marginLeft: '8px' }}>{`- 0xSRE7BIXNDCCDZIO3GROJ9DTUGD1WPT (Northern District Recruiment Center)`}</Typography>
                <Typography sx={{ fontFamily: 'Cabin', marginLeft: '8px' }}>{`- 0xF1ESNNLMB6M6Z5IQE3FUVTQRIVX1E1 (Charity Operations Team)`}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '32px' }} />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontSize: '24px', fontFamily: 'Cabin', fontWeight: 'bold' }}>{`Key Information`}</Typography>
          <Box sx={{ height: '8px' }} />
          <Typography sx={{ fontSize: '16px', fontFamily: 'Cabin', fontWeight: 'bold' }}>{`Purpose`}</Typography>
          <Typography sx={{ fontSize: '16px', fontFamily: 'Cabin'                     }}>{`Emergency Medical Aid`}</Typography>
          <Box sx={{ height: '8px' }} />
          <Typography sx={{ fontSize: '16px', fontFamily: 'Cabin', fontWeight: 'bold' }}>{`Minimum Donation`}</Typography>
          <Typography sx={{ fontSize: '16px', fontFamily: 'Cabin'                     }}>{`$2`}</Typography>
          <Box sx={{ height: '8px' }} />
          <Typography sx={{ fontSize: '16px', fontFamily: 'Cabin', fontWeight: 'bold' }}>{`Goal`}</Typography>
          <Typography sx={{ fontSize: '16px', fontFamily: 'Cabin',                    }}>{`$1,000,000`}</Typography>
          <Box sx={{ height: '8px' }} />
          <Typography sx={{ fontSize: '16px', fontFamily: 'Cabin', fontWeight: 'bold' }}>{`Fundraising End Date`}</Typography>
          <Typography sx={{ fontSize: '16px', fontFamily: 'Cabin',                    }}>{`31 December 2023`}</Typography>
        </Box>
      </Box>

    </Box>

  )

};

export default Donator;