import React from 'react';

import {Box, Stack, Typography, Button} from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx= {{mt: {lg: '212px' , xs: '70px'} , ml: {sm: '50px'}}} position="relative" p='20px'>
      <Typography color="#FF2625" fontWeight='600' fontSize="26px">
        Gym-go
      </Typography>

      <Typography fontWeight={700}  sx={{fontSize : {lg: '44px' , xs: '36px'} }} mb='23px' mt='30px' >
        Sweat, Sweat <br/> Repeat
      </Typography>

      <Typography lineHeight='35px' fontWeight='200' fontSize="22px" mb={4}>
        Check out the most effective Exercies
      </Typography>
      <Button href='#exercises' variant='contained' color='error' sx={{ backgroundColor: '#FF2625' , padding: '10px'}}>
        Explore Exercies
      </Button>
      <Typography color="#FF2625" fontWeight={600} fontSize="150px" mb={3} sx={{
        opacity: 0.1,
        display: { lg: 'block' , xs: 'none'}
      }}>
       Gym-go
      </Typography>
      <img src = {HeroBannerImage}  alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner