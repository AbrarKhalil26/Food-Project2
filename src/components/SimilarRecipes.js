import React, { useEffect, useState } from 'react'
import { FetchFromAPI } from '../redux/FetchAPI';
import { Grid, Stack, Typography } from '@mui/material';
import MealCard from './MealCard';

const SimilarRecipes = ({ id }) => {
  
  const [mealsData, setMealsData] = useState([]);
  const mealSlice = mealsData.slice(0, 8)

  useEffect(()=> {
    setMealsData([]);

    FetchFromAPI(`recipes/list-similarities?recipe_id=${id}`)
    .then((data) => setMealsData(data.results))
    .catch(error => {
      console.error('API request failed:', error);
    });
  },[id])

  console.log(mealsData)

  return (
    <Stack sx={{ backgroundColor: '#f9f5f4', py: '4rem'}} className="container">
      <Typography variant="h5" mb={5} fontWeight={600}>
        Other Recipes You May Like
      </Typography>
      <Grid container spacing={4}>
        {
          mealSlice.map((item, i) => (
            <MealCard dataMeal={item} key={i}/>
          ))
        }

      </Grid>
    </Stack>
  )
}

export default SimilarRecipes
