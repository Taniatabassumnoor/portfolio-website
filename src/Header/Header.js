import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Portfolio Website
          </Typography>
          <Box >
          <NavLink style={{textDecoration:"none",color:"#fff",marginLeft:"10px"}} to="/">Home</NavLink>
          <NavLink style={{textDecoration:"none",color:"#fff",marginLeft:"10px"}} to="/about">About</NavLink>
          <NavLink style={{textDecoration:"none",color:"#fff",marginLeft:"10px"}} to="/project">Projects</NavLink>
          <NavLink style={{textDecoration:"none",color:"#fff",marginLeft:"10px"}} to="/contact">Contact</NavLink>
          <NavLink style={{textDecoration:"none",color:"#fff",marginLeft:"10px"}} to="/blog">Blogs</NavLink>
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
