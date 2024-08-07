import React, { useEffect, useState } from 'react'
import { Avatar, Card, CardContent, CardHeader, Divider, List, Stack, Typography } from '@mui/material'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { FetchFromAPI } from '../redux/FetchAPI';


const StepsRecipe = ({ instructions, id }) => {
  const [tips, setTips] = useState([]);

  useEffect(()=> {
    setTips([]);

    FetchFromAPI(`tips/list?id=${id}&from=0&size=5`)
    .then((data) => setTips(data.results))
    .catch(error => {
      console.error('API request failed:', error);
    });

  },[id])
  console.log(tips)

  return (
    <Stack>
      <Typography variant="h5" mb={5} fontWeight={600}>
        How to Make it
      </Typography>
      {instructions?.map((item, index) => (
        <List mb={3} sx={{ mb: "20px" }} key={index}>
          <Typography
            display="flex"
            alignItems="center"
            gap={2}
            color="#eb4a36"
            mb={2}
          >
            <TaskAltOutlinedIcon /> {index + 1}. STEP
            <Divider sx={{ flex: 1, color: "#eee" }} />
          </Typography>
          <Typography variant="subtitle1" ml={5}>
            {item.display_text}
          </Typography>
        </List>
      ))}

      <Typography variant="h5" my={5} fontWeight={600}>
        Comments
      </Typography>
      {tips.map((item, index) => (
        <Card key={index} sx={{ mb: '20px'}}>
          <CardHeader
            avatar={
              <Avatar src={item.author_avatar_url} alt={item.author_name} />
            }
            title={item.author_name || 'user'}
            subheader={"12 days ago"}
            subheader1={'⭐⭐⭐⭐⭐'}
          />
          <CardContent>
            <Typography variant="subtitle1" color="text.secondary">
              {item.tip_body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default StepsRecipe
