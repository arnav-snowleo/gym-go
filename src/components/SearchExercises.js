import React, {useState, useEffect} from 'react';

import {Box, Stack, TextField, Typography, Button} from '@mui/material';

import { exerciseOptions , fetchData } from '../utils/fetchExercisesData';
import BodyPartsScrollBar from './BodyPartsScrollBar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

  //use useStateSnippet
  const [search, setSearch] = useState(''); 
  const [bodyParts, setBodyParts] = useState([]);

  //use useEffectSnippet
  useEffect(() => {

    const fetchExercisesData =  async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', 
        exerciseOptions);

      setBodyParts(['all' , ...bodyPartsData]);
    }

    //fetch categories as soon as page loads
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if(search){
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises', 
        exerciseOptions
      );

      console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        exercise => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );

      //setSearch = '';  //commented as 'setSearch' is constant  no-const-assign
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p ='20px'>
      <Typography fontWeight={700} sx ={{ fontsize: {lg: '44px' , xs: '30px'}}} mb='50px' textAlign='center'>
        Awesome Exercises <br/>you should know
      </Typography>
      
      <Box position='relative' mb='72px'>
        <TextField sx={{
          input: {fontWeight: '700' , border: 'none' , borderRadius: '4px'} ,
          width: {lg: '800px' , xs: '350px'}, 
          backgroundColor: '#fff',
          borderRadius: '40px'
        }} 
        height='76px'
        value={search} 
        onChange={ (e) => setSearch(e.target.value.toLowerCase()) } 
        type='text' 
        placeholder='Search Exercises'
        />   

        <Button onClick={ handleSearch}
        className= 'search-btn' sx={{
          bgcolor: '#FF2625',
          color: '#FFF',
          textTransform: 'none',
          width: {lg: '175px' , xs: '80px'},
          fontSize: {lg: '20px' , xs: '14px'},
          height: '56px',
          position: 'absolute',
          right: '0',  //important
        }}>
          Search
        </Button>
      </Box>
      {/* categories box */}
      <Box sx={{
        position: 'relative',
        width: '100%',
        height: '' , 
        p: '20px'
      }}>
        <BodyPartsScrollBar data ={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises