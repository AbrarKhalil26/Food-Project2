import { Card, CardContent, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const VideoCard = ({ dataMeal }) => {
  const [playVideo, setPlayVideo] = useState("");
  const { original_video_url, thumbnail_url, name, id } = dataMeal;

  console.log(original_video_url);

  return (
    <>
      <Link to={playVideo} target="_blank">
        <Card
          sx={{
            width: "100%",
            boxShadow: "none",
            minHeight: "400px",
            backgroundImage: `url('${thumbnail_url}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "20px",
            objectFit: "cover",
          }}
        >
          <CardContent
            sx={{
              background: "rgba(0,0,0,0.2)",
              padding: "20px",
              position: "relative",
              width: "100%",
              height: "400px",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: "40%",
                left: "40%",
                color: "#eb4a36",
              }}
              onClick={() => setPlayVideo(original_video_url)}
            >
              <PlayArrowIcon
                sx={{
                  fontSize: "70px",
                  border: "3px solid white",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />
            </IconButton>
            <Link to={`recipe/${id}`}>
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                color="white"
                position="absolute"
                bottom="60px"
              >
                {name}
              </Typography>
            </Link>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              color="rgba(255,255,255,0.7)"
              position="absolute"
              bottom="30px"
            >
              by Thomas Haller
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default VideoCard;
