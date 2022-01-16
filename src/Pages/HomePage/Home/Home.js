import { Button, Container, Grid } from '@mui/material';
import React from 'react';
import profileImg  from '../../../images/banner.png'
import './Home.css'
import Typical from 'react-typical';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div style={{marginTop:"15px"}} className="banner">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <div>
                        <h2 style={{color:"black", marginTop:"15%"}}>Hello, I Am Tania Tabassum Noor</h2>
                        <span>
                            <h1 style={{color:"black"}}>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Ethuiastic Dev",
                                        1000,
                                        "Full Stack Developer",
                                        1000,
                                        "MERN stack Developer"
                                    ]}
                                />
                            </h1>
                        </span>
                        <p style={{color:"black", marginBottom:"5%"}}>Any person can write code that a computer can understand but <br/>good programmers write code that humans can understand.</p>
                    </div>
                    <div>
                    <Link style={{textDecoration:"none",margin:"5%"}} to="/contact">
                    <Button style={{backgroundColor:"salmon",color:"white"}}>Hire Me</Button></Link>
                        <a style={{textDecoration:"none",margin:"5%"}} href="Tania_Tabassum_Noor_Resume (3).pdf" download="Tania_Tabassum_Noor_Resume (3).pdf"><Button style={{backgroundColor:"salmon",color:"white"}}>Get Resume</Button></a>

                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                <img style={{width:"100%"}} src={profileImg} alt ="" />
                </Grid>

            </Grid>
       </div>
    );
};

export default Home;