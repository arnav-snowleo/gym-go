import React , {useState} from 'react';
import {Box} from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const HomePage = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
        <HeroBanner />
        <SearchExercises 
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        /> 
        <Exercises
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}      
        />
    </Box>
  )
}

//can use react context to remove redundant code

export default HomePage