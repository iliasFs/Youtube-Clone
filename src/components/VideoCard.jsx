import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{ width: { md: "320px", xs: "100%" }, boxShadow:'none', borderRadius:0 }}>
      <Link to={videoId ? `/video/${videoId}` : null}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: "358px", height: "180px" }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : null}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#FFF"
            backgroundColor="#1e1e1e"
          >
            {snippet?.title.slice(0, 60) || null}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : null}>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="gray"
            backgroundColor="#1e1e1e"
          >
            {snippet?.channelTitle.slice(0, 60) || null}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
