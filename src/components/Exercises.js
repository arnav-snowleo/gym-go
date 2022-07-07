import React, {useState, useEffect} from 'react';

import {Box, Stack, Typography} from '@mui/material';
import Pagination from '@mui/material/Pagination';

import ExerciseCard from './ExerciseCard';
import { exerciseOptions, fetchData} from '../utils/fetchExercisesData';

const Exercises = ({exercises, setExercises, bodyPart}) => {
  
  console.log(exercises);

  return (
    <Box id='exercises'
        sx = {{
          mt: {lg: '110px'}
        }}  
        p = '20px' 
        mt= '50px'
    >
      <Typography variant='h3' mb='46px' >
        Showing results
      </Typography>
      <Stack
          direction='row' 
          sx = {{
            gap: {lg: '110px' , xs: '50px'}
          }}
          flexWrap='wrap'
          justifyContent='center'
      >
        {exercises.map( (exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
          // <p>{exercise.name}</p>
        ))}

      </Stack>
    </Box>
  )
}

export default Exercises