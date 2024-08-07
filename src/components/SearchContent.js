import React, { useEffect, useState } from 'react';
import { FetchFromAPI } from '../redux/FetchAPI';
import { Grid } from '@mui/material';
import MealCard from './MealCard';

const SearchContent = ({ valueInput }) => {
  const [mealsData, setMealsData] = useState([]);
  const [listFromFavorite, setListFromFavorite] = useState([]);


  const favoriteFunction = (dataMeal, isFavorite) => {
    let updatedFavorites;
    // console.log(isFavorite)
    if (isFavorite) {
      if(listFromFavorite.includes(dataMeal))
        updatedFavorites = listFromFavorite.filter((item) => item.id !== dataMeal.id);
      else {
        updatedFavorites = [...listFromFavorite, dataMeal];
      }
    }
    setListFromFavorite(updatedFavorites);
    localStorage.setItem('FavoriteMeals', JSON.stringify(updatedFavorites));
  };

  // useEffect(() => {
  //   setMealsData([]);

  //   FetchFromAPI(`recipes/list?from=0&size=100&q=${valueInput}`)
  //     .then((data) => setMealsData(data.results))
  //     .catch((error) => {
  //       console.error('API request failed:', error);
  //     });
  // }, [valueInput]);

  console.log('DataMeal:', mealsData)
  console.log('listFromFavorite:', listFromFavorite)

  return (
    <div>
      <Grid container spacing={4} mt={4}>
        {mealsData.map((item) => (
          <MealCard
            key={item.id}
            dataMeal={item}
            isFavorite={listFromFavorite?.some((favorite) => favorite.id === item.id)}
            favoriteFunction={favoriteFunction}
          />
        ))}
      </Grid>
    </div>
  );
};

export default SearchContent;