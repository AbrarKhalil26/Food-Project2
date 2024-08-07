import { Star } from '@mui/icons-material'
import { Box, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';

const MealCard = ({ dataMeal, isFavorite, favoriteFunction }) => {
  const [colorFavorite, setColorFavorite] = useState(isFavorite);
  
  if(!dataMeal?.user_ratings) return 'loading...'
  
  const {
    name,
    thumbnail_url,
    show,
    user_ratings: {score, count_positive},
  } = dataMeal || {}
  
  const roundedNumber = score ? (score * 10).toFixed(1): "N/A"; // "9.7"


  const handleFavorite = () => {
    setColorFavorite(!colorFavorite);
    favoriteFunction(dataMeal, !colorFavorite);
  }


  const mealItem = (
    <Card sx={{ width: "100%", boxShadow: "none" }}>
      <Box sx={{ position: "relative" }}>
        <Link to={`/recipe/${dataMeal.id}`}>
          <CardMedia
            component="img"
            alt={name}
            height="150"
            image={thumbnail_url}
            sx={{ width: "100%", borderRadius: "10px" }}
          />
        </Link>
        <IconButton
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: colorFavorite ? "red" : "white",
          }}
        >
          <FavoriteIcon onClick={handleFavorite} />
        </IconButton>
      </Box>

      <Link to={`/recipe/${dataMeal.id}`}>
        <CardContent sx={{ pb: "0" }}>
          <Typography gutterBottom variant="subtitle1" color='black' fontWeight={600}>
            {name}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: "space-between", mb: "20px" }}>
          <Typography
            variant="subtitle2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Star sx={{ color: "gold", mr: "10px" }} /> {roundedNumber} ({count_positive})
          </Typography>
          <Typography variant="subtitle2">{show?.name}</Typography>
        </CardActions>
      </Link>
    </Card>
  );

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      {mealItem}
    </Grid>
  );
}

export default MealCard
