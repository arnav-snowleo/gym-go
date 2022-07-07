import React, {useState, useEffect} from 'react';

import {Box, Stack, Typography} from '@mui/material';
import Pagination from '@mui/material/Pagination';

import ExerciseCard from './ExerciseCard';
import { exerciseOptions, fetchData} from '../utils/fetchExercisesData';

const Exercises = ({exercises, setExercises, bodyPart}) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercisesBatch = exercises.slice(indexOfFirstExercise,indexOfLastExercise);

  const paginate = (e,value) => {
    setCurrentPage(value);

    window.scrollTo({top:1800, behavior: 'smooth'})
  }

  // console.log(exercises);

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
        {currentExercisesBatch.map( (exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
          // <p>{exercise.name}</p>
        ))}

      </Stack>

      {/* pagination */}

      <Stack mt='100px' alignItems='center' >

        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage = {1}
            count = {Math.ceil(exercises.length/exercisesPerPage)}
            page = {currentPage}
            // onChange = {(e) => paginate(e,value)} //this is done by materialUi
            onChange =  {paginate}
            size = 'large'
          />

        )}


      </Stack>
    </Box>
  )
}

export default Exercises