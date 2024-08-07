import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Subscribe = () => {
  return (
    <Stack
      sx={{
        background: "#eb4a36",
        mt: "4rem",
        padding: {md:"40px 25%", xs: '40px 20px'},
        textAlign: "center",
        borderRadius: "20px",
        color: "white",
      }}
      className='subscribe'
    >
      <Typography variant="h5" mb={4}>
        Be the first to know about the latest deals, receive new trending
        recipes &amp; more!
      </Typography>
      <Grid container spacing={2} alignItems='center'>
        <Grid item xs={12} sm={9}>
          <TextField
            placeholder='Email Address'
            id="fullWidth"
            fullWidth
            sx={{ color: 'white'}}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button  sx={{ background:"#ff9800", ':hover': {background:"#ff9800"}, width: '100%' , paddingY: 2, borderRadius: '30px' }} variant="contained">
            Subscribe
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Subscribe
