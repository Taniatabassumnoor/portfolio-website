import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container,Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Blog = () => {
    return (
        <Container>  
          <Typography style={{color:"salmon",padding:"5%"}} gutterBottom variant="h3" component="div">
        Blog Section
        </Typography>     
    <Grid container spacing={2}>
  <Grid item xs={12} sm={12} md={6} >
  <Card sx={{ maxWidth: 500, margin: "20px auto" }}>
      <CardMedia
        component="img"
        height="250"
        image="https://i.ibb.co/4tKP17d/react-js.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        React Fundamental Core Concept
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Discussed about fundamental core concepts of React.
        </Typography>
      </CardContent>
      <CardActions>
        <a style={{margin:"0 auto",textDecoration:"none"}} href='https://www.linkedin.com/pulse/react-fundamental-core-concept-tania-tabassum-noor'><Button  size="small" variant='contained'>Read More</Button></a>
        
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={12} sm={12} md={6} >
  <Card sx={{ maxWidth: 500, margin: "20px auto" }}>
      <CardMedia
        component="img"
        height="250"
        image="https://i.ibb.co/stYVbsy/node.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        React Fundamental Core Concept
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Discussed about fundamental core concepts of Node.js.
        </Typography>
      </CardContent>
      <CardActions>
        <a style={{margin:"0 auto",textDecoration:"none"}} href='https://www.linkedin.com/pulse/basic-concept-nodejs-tania-tabassum-noor'><Button  size="small" variant='contained'>Read More</Button></a>
        
      </CardActions>
    </Card>
  </Grid>
</Grid>
        </Container>
    );
};

export default Blog;