import React from 'react'
import { Box, Divider, List, Stack, Typography } from '@mui/material'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import IconsSocial from './IconsSocial';


const icons = [
  {
    title: "facebook",
    icon: faFacebookF,
    color: "#3b5998",
  },
  {
    title: "linkedIn",
    icon: faLinkedinIn,
    color: "#0e76a8",
  },
  {
    title: "twitter",
    icon: faTwitter,
    color: "#00acee",
  },
];

const Ingredients = ({ ingredients , tags}) => {
  return (
    <Stack>
      <Typography variant="h5" mb={3} fontWeight={600}>
        Ingredients
      </Typography>
      {ingredients?.map((item, index) => (
        <List key={index} sx={{ p: "0" }}>
          <Typography variant="subtitle1" sx={{ py: "20px" }}>
            {item.raw_text}
          </Typography>
          <Divider sx={{ color: "#eee" }} />
        </List>
      ))}

      <Typography variant="h5" mb={3} fontWeight={600} mt={6}>
        Tages
      </Typography>

      <Box display='flex' flexWrap='wrap' gap={2}>
        {tags.map((item, index) => (
          <span
            key={index}
            style={{
              textTransform: "uppercase",
              color: "#897e78",
              background: "#f9f5f4",
              width: "fit-content",
              padding: "10px",
              borderRadius: '5px',
            }}
          >
            {item.name}
          </span>
        ))}
      </Box>

      <Box>
        <Typography variant="h5" mb={3} fontWeight={600} mt={6}>
          Share Recipe
        </Typography>
        <IconsSocial icons={icons}/>
      </Box>
    </Stack>
  );
}

export default Ingredients
