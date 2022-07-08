import React from 'react';
import {Stack , Button, Typography} from '@mui/material';
import {Link} from 'react-router-dom';


const ExerciseCard = ({exercise}) => {

  return (
    // ALERT: spent 2 hrs to debug:  used this '' instead of `` 
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>  
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction="row">
            <Button sx={{
                ml: '21px',
                color: '#fff',
                background: '#ffa9a9',
                fontSize: '14px',
                borderRadius: '20px',
                textTransform: 'capitalize'
            }}>
                {exercise.bodyPart}

            </Button>
            <Button sx={{
                ml: '21px',
                color: '#fff',
                background: '#fcc757',
                fontSize: '14px',
                borderRadius: '20px',
                textTransform: 'capitalize'
            }}>
                {exercise.target} 

            </Button>

        </Stack>
        <Typography ml='21px' pb='10px' color='#000' fontSize='20px' fontWeight = 'bold' mt='11px' textTransform='capitalize'>
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard