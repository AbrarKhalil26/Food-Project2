import React from 'react'
import { footerData, socialData } from '../data/data'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  
  const itemData = footerData.map((item, index) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
      {item.links.map((link, i) => (
        <Typography
          key={i}
          variant="subtitle1"
          sx={{
            cursor: "pointer",
            transition: "color 0.3s",
            ":hover": { color: "#eb4a36" },
            color: "gray",
          }}
        >
          {link}
        </Typography>
      ))}
    </Grid>
  ));

  const socialIcons = socialData.map((item, index) => (
    <FontAwesomeIcon
      key={index}
      className="general-icon"
      icon={
        item.title === "facebook" ||
        item.title === "instagram" ||
        item.title === "twitter"
          ? item.icon
          : null
      }
      color={item.color}
      style={{
        border: `1px solid ${item.color}`,
      }}
    />
  ));

  return (
    <Stack className='container' sx={{ my: '4rem'}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h6">
          <Link to="/" className="logo">
            Kocina
          </Link>
        </Typography>

        <Box sx={{ display: 'flex', gap: '10px'}}>
          {socialIcons}
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, mt: '20px' }}>
        <Grid container spacing={2}>
          {itemData}
        </Grid>
      </Box>
    </Stack>
  )
}

export default Footer
