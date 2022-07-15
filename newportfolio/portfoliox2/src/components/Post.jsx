import React from "react";
import {
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Post = () => {
  return (
    <Card sx={{margin:3}}>
      <CardHeader
        avatar={<Avatar>TW</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Learn how to play Black Jack before risking it all!"
        subheader="July 20, 2022"
      />
      <CardMedia
        component="img"
        height="10%"
        image="https://cdn.hswstatic.com/gif/how-to-play-blackjack-lead.jpg"
        alt="blackjack"
      />
      <CardContent>
        <Typography variant="body2">
         In this 20 minute tutorial there will be a lot of strategic approaches to this risky game. 
         Favorite this post and tune in! 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
