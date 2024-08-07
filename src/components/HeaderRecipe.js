import React, { useEffect, useState } from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import UpdateIcon from '@mui/icons-material/Update';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import IconsRecipe from './IconsRecipe';


const HeaderRecipe = ({ dataMeal , componentRef, isSaved, setIsSaved, savedFunction ,existingSaved }) => {


  if(!dataMeal?.total_time_tier) return 'loading...'

  const {
    description,
    name,
    thumbnail_url,
    yields,
    cook_time_minutes,
    total_time_tier: { display_tier },
    show_id,
  } = dataMeal

  const detailsMeal = [
    {
      id: 1,
      icon: AccessTimeIcon,
      title: 'Active Time',
      text: cook_time_minutes,
      borderRight: '1px solid #eee'
    },
    {
      id: 1,
      icon: UpdateIcon,
      title: 'Total Time',
      text: display_tier,
      borderRight: '1px solid #eee'
    },
    {
      id: 1,
      icon: GroupAddOutlinedIcon,
      title: 'Yield',
      text: yields,
      borderRight: ''
    },
  ];


  return (
    <Stack className="container">
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={5}>
          <img
            src={thumbnail_url}
            alt={name}
            width="100%"
            style={{ borderRadius: "20px" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" mb={2}>
            {name}
          </Typography>
          <Typography variant="subtitle1" color="#aaa" mb={4}>
            {description}
          </Typography>

          <Grid
            container
            justifyContent="space-evenly"
            borderBottom="1px solid #eee"
            pb={3}
            spacing={3}
          >
            {detailsMeal.map((item, index) => (
              <Grid
                item
                xs={4}
                key={index}
                display="grid"
                textAlign="center"
                borderRight={item.borderRight}
              >
                {React.createElement(item.icon, {
                  style: { marginLeft: "auto", marginRight: "auto" },
                })}
                <Typography variant="h6" color={"black"}>
                  {item.title}
                </Typography>
                <Typography variant="subtitle2">{item.text}</Typography>
              </Grid>
            ))}
          </Grid>

          <Box mt={3} display="flex" justifyContent="space-between">
            <Box>
              <Typography>
                Created by <span style={{ color: "red" }}>Alex Williamns</span>
              </Typography>
              <Typography variant="subtitle2">{show_id} recipes</Typography>
            </Box>
            <Box color="gray" display="flex" gap={2}>
              <IconsRecipe
                dataMeal={dataMeal}
                componentRef={componentRef}
                isSaved={isSaved}
                setIsSaved={setIsSaved}
                savedFunction={(isSaved) => savedFunction(isSaved, dataMeal)}
                existingSaved={existingSaved}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default HeaderRecipe
