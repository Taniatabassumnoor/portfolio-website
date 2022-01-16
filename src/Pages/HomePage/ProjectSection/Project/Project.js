import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  Grid, Button} from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
const Project = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/allproject.json")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, [])
  return (
    <Box sx={{ flexGrow: 1, mt: 25, mb: 15, marginRight: "3%", marginLeft: "3%" }}>

      <Typography sx={{ fontWeight: 600, m: '5%', color: 'salmon' }} variant="h4" component="div">
        Some Of my projects
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {
          projects.map(project => <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 5 }}>
              <CardMedia
                component="img"
                style={{ width: '100%', margin: '0 auto' }}
                image={project?.img
                }
                alt=""
              />
              <CardContent sx={{ p: 3 }} >
                <Typography sx={{ p: 1 }} variant="h4" component="div">
                {project?.name}
                </Typography>
                <Typography sx={{ p: 1 ,fontSize:"15px"}} variant="h6" component="div">
                {project?.shortDescription}
                </Typography>

                <NavLink style={{ textDecoration: 'none'}} to={`/projectDetail/${project?.id}`}>
                  <Button style={{backgroundColor:"salmon",color:"white"}}>Details</Button>
                </NavLink>
              </CardContent>
            </Card>
          </Grid>)
        }
      </Grid>

    </Box>
  );
};

export default Project;
