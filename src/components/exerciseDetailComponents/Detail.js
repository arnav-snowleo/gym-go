import React from 'react';

import {Typography, Stack , Button} from '@mui/material';

import BodyPartImage from '../../assets/icons/body-part.png';
import TargetImage from '../../assets/icons/target.png';
import EquipmentImage from '../../assets/icons/equipment.png';

const Detail = ({exerciseDetail}) => {

  // object de-structuring
  const {bodyPart, gifUrl, name , target, equipment} = exerciseDetail;

  return (
    <Stack gap='60px' sx={{
      flexDirection: {lg: 'row'},
      p: '20px',
      alignItems: 'center'
    }}>
      <img src={gifUrl} alt={name} loading='lazy' className ='detail-image'/>
      <Typography ml='21px' pb='10px' color='#000' fontSize='20px' fontWeight = 'bold' mt='11px' textTransform='capitalize'>
            {name}
      </Typography>

    </Stack>
  )
}

export default Detail