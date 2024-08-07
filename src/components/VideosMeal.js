import { Box, Card, Grid, MenuItem, OutlinedInput, Select, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FetchFromAPI } from '../redux/FetchAPI';
import VideoCard from './VideoCard';

const optionSelect = [
  "Sort by: Latest",
  "Sort by: Top Reted",
  "Sort by: Tranding",
];

const VideosMeal = () => {
  const [select, setSelect] = useState('Sort by:');
  const [mealsData, setMealsData] = useState([]);

  // useEffect(()=> {
  //   setMealsData([]);

  //   FetchFromAPI(`recipes/list?from=0&size=4&q=cake`)
  //   .then((data) => setMealsData(data.results))
  //   .catch(error => {
  //     console.error('API request failed:', error);
  //   });
  // },[])

  // console.log(mealsData)

  return (
    <Link to="" style={{ marginTop: "4rem" }}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" mb={5} fontWeight={700} color={"black"}>
          Videos
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          displayEmpty
          id="demo-simple-select"
          value={select}
          input={<OutlinedInput />}
          onChange={(e) => setSelect(e.target.value)}
          sx={{
            background: "#f9f5f4",
            borderRadius: "50px",
            width: "180px",
            height: "45px",
            px: "10px",
          }}
        >
          <MenuItem value="Sort by:" disabled>
            Sort by:
          </MenuItem>
          {optionSelect.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Grid container spacing={3}>
      {mealsData.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <VideoCard dataMeal={item} />
          </Grid>
      ))}
      </Grid>
    </Link>
  );
}

export default VideosMeal
