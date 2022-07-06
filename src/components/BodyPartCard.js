import React from 'react';

import {Stack, Typography} from '@mui/material';

import Icon from '../assets/icons/gym.png';

const BodyPartCard = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack 
        type="button"
        alignItems='center'
        justifyContent='center'
        className="bodyPart-card"
        sx={{
                borderTop: bodyPart === item ? '1px solid #ff2625' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadiush: '20px',
                width: '270px',
                height: '270px',
                gap: '47px',
                cursor: 'pointer',
        }}
        onClick={() => {
            setBodyPart(item);
            // TODO: implement exercises and uncomment
            // window.scrollTo({top: 1800, left: 100 , behavior: 'smooth'});
        }}
        >
        <img src={Icon} alt="dumbbell" style={{
            width: '40px',
            height:'40px'
            }}
        />
        <Typography textTransform='capitalize' fontWeight='bold' color='black' fontSize='18px'>
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPartCard