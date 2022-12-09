import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import ReactHtmlParser from "react-html-parser";
const DisplayTutorial = (tutorial) => {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(true);
  }
  const handleunLike = () => {
    setLiked(false);
  }
  return (
        <React.Fragment>
          <Box width="600px" padding={2}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={tutorial.tutorial.imgurl}
              />
              <CardContent>
                <Typography gutterBottom varient="h5" component="div">
                  <Avatar>
                    <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
                  </Avatar>
                  {tutorial.tutorial.createdby}
                  <Typography variant="body2" color="text.secondary">
                    from {tutorial.tutorial.orgName}
                  </Typography>
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {tutorial.tutorial.title}
                  <Typography variant="body2" color="text.secondary">
                    Posted On: {tutorial.createddat}
                  </Typography>
                </Typography>
                <div>{ReactHtmlParser(tutorial.tutorial.description)}</div>
              </CardContent>
              <CardActions>
                { liked ? (<Button size="small" onClick={handleunLike}>
                      <ThumbUpIcon />
                    </Button>): (
                    <Button size="small" onClick={handleLike}>
                      <ThumbUpOffAltIcon />
                    </Button>
                  )}
                <Button size="small">
                  <CommentOutlinedIcon />
                </Button>
                <Button size="small">
                  <ShareOutlinedIcon></ShareOutlinedIcon>
                </Button>
              </CardActions>
            </Card>
          </Box>
        </React.Fragment>
      
  );
};

export default DisplayTutorial;
