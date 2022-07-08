import React , {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';  //for getting id of the current exercise we need to display

import {Box} from '@mui/material';
import {exerciseOptions, fetchData} from '../utils/fetchExercisesData';

import Detail from '../components/exerciseDetailComponents/Detail';
import ExerciseVideos from '../components/exerciseDetailComponents/ExerciseVideos';
import SimilarExercises from '../components/exerciseDetailComponents/SimilarExercises';

const ExerciseDetailPage = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchDetailData = async() => {

      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
      const videoUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}` , exerciseOptions);
    
      setExerciseDetail(exerciseDetailData);
    };

    fetchDetailData();
  }, [id]);

  if(!exerciseDetail) return <div>No data</div>

  return (
    <Box sx={{mt : {lg: '96px' , xs: '60px'} }}>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetailPage;
