import { Container, Grid,Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../images/tani.jpg'
const About = () => {
    return (
        <Container>
            <h1>About Me</h1>
           <Grid container spacing={2}>
  <Grid item xs={12} sm={12} md={6}>
   <p>Hello, I am Tania Tabassum Noor passionate about programming. Less than one year I have learnt some programming skill and based on it I have created some projects. Now I am ready to show my honesty, hard work, patience and sufficient confidence along with merit encountering any sort of diverse situation. Looking for opportunities to make the best use of my skills and create great products. <br/>
</p>
<br/>
<p>
PROGRAMMING SKILLS : <br/>
Comfortable : <br/>
React.js, REST API, React Router, JavaScript, ES6, MongoDb, React Bootstrap,Bootstrap5, HTML5, CSS3<br/>
Familiar : <br />
Node.js, Express.js,Redux, JSON, Material UI<br/>
Tools: <br />
Git, VS Code, Chrome Dev tool, Firebase, Netlify, Heroku, Notepad++ <br/>
Others: <br />
Microsoft Word, Microsoft PowerPoint, Figma, Adobe Illustrator <br/>
GitHub:Here is my github link <a href="https://github.com/Taniatabassumnoor">GitHub</a> <br/>
Thank you very much for reading my overview carefully & if you want to know something more can knock me. You will be always welcome. <br/>

Feel free to contact me at <span style={{color:"salmon"}}>taniatabassumnoor866@gmail.com</span> 
</p>
  </Grid>
  <Grid item xs={12} sm={12} md={6}>
   <img style={{width:"75%"}} src={about} alt=""/>
  </Grid>
  
</Grid>
<Link style={{textDecoration:"none",margin:"5%"}} to="/contact">
                    <Button style={{backgroundColor:"salmon",color:"white"}}>Hire Me</Button></Link>
<a style={{textDecoration:"none",margin:"5%"}} href="Tania_Tabassum_Noor_Resume (3).pdf" download="Tania_Tabassum_Noor_Resume (3).pdf"><Button style={{backgroundColor:"salmon",color:"white"}}>Get Resume</Button></a>
        </Container>
    );
};

export default About;