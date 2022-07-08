import React from 'react';

import {Typography, Stack , Button} from '@mui/material';

import BodyPartImage from '../../assets/icons/body-part.png';
import TargetImage from '../../assets/icons/target.png';
import EquipmentImage from '../../assets/icons/equipment.png';
import { width } from '@mui/system';

const Detail = ({exerciseDetail}) => {

  // object de-structuring
  const {bodyPart, gifUrl, name , target, equipment} = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      string: 'bodypart: ',
      name: bodyPart,
    },
    {
      icon: TargetImage,
      string: 'target: ',
      name: target,
    },
    {
      icon: EquipmentImage,
      string: 'equipments: ',
      name: equipment,
    },
  ]

  return (
    <Stack gap='60px' sx={{
      flexDirection: {lg: 'row'},
      p: '20px',
      alignItems: 'center'
    }}>
      <img src={gifUrl} alt={name} loading='lazy' className ='detail-image'/>
      <Stack sx={{
        gap: {lg: '35px' , xs: '20px'}
      }}>
        <Typography ml='21px' pb='10px' color='#000' fontSize='40px' fontWeight = 'bold' mt='11px' textTransform='capitalize'>
            {name}
        </Typography>
        <Typography variant ='h6' ml='21px' pb='10px' color='#000' fontSize='20px' fontWeight = 'bold' mt='11px' textTransform='capitalize'>
            {name} is done for {target}
        </Typography>

        {extraDetail.map((item) => (
          <Stack key={item.name}  direction='row' gap='24px' alignItems='center'>
            <Button sx={{
              background: '#fff2db',
              borderRadius: '50%',
              width: '100px',
              height: '100px',
            }}>
              <img src={item.icon} alt={bodyPart} style={{width:'50px', height:'50px'}}/>
            </Button>
            <Typography variant='h5'>
              {item.string} {item.name}
            </Typography>

          </Stack>
        ))}

      </Stack>


    </Stack>
  )
}

export default Detail