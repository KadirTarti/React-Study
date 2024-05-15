import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box,Container,Grid } from '@mui/material';
import { useState } from 'react';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : '',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  export default function BlogCardd( { blog } ) {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <Container sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
         <Grid item xs={12} sm={6} md={4} lg={3} sx={{display: 'flex'}}>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                AT
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title= {blog.title}
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image= {blog.image}
            alt= {blog.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            {blog.content.substring(0, 100)}...
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon /> Read More 
            </ExpandMore>
          </CardActions>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>More:</Typography>
              <Typography paragraph>
                More Info
              </Typography>
              <Typography paragraph>
               More Info 2
              </Typography>
              <Typography paragraph>
                More Info 3
              </Typography>
              <Typography>
               More Info 4
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        </Grid>
        </Box>
      </Container>
      );


}

{/* 
    <div className="card">
      <img src={blog.image} alt={blog.title} />
      <h3>{blog.title}</h3>
      <p>{blog.content.substring(0, 100)}...</p>
      <button>Read More</button>
    </div> */}
