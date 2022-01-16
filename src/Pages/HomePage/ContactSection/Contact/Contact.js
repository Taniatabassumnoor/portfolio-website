import { Button, TextField } from '@mui/material';
import React, { useRef} from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef()
     const sendEmail = e =>{
        e.preventDefault();
  
        emailjs.sendForm('service_a8zivlk', 'template_czyks0k', form.current, 'user_I7EP7nIjqEStC2nljLCsq')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
    return (
        <div id="contact">
             <h1 style={{color:"salmon",fontSize:"40px"}}>Contact Form</h1>
           <form ref={form} onSubmit={sendEmail}>
           <TextField 
           sx={{width:"50%",marginTop:"2%"}}
           id="standard-basic" 
           name="name"
           label="Name" 
           variant="standard" /> <br />
           <TextField 
           sx={{width:"50%",marginTop:"2%"}}
           id="standard-basic" 
           name="email"
           label="Email" 
           variant="standard" /> <br />
           <TextField 
           sx={{width:"50%",marginTop:"2%"}}
           id="standard-basic" 
           name="subject"
           label="Subject" 
           variant="standard" /> <br />
           <TextField
           sx={{width:"50%",marginTop:"2%"}}
          id="filled-multiline-static"
          name="message"
          label="Message"
          multiline
          rows={4}
          variant="filled"
        /> <br />
        <Button style={{backgroundColor:"salmon",color:"white",marginTop:"2%",marginBottom:"10%"}} type="submit">Submit</Button>
           </form>
        </div>
    );
};

export default Contact;