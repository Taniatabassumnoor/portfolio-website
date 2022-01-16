import { Container, Grid,Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetail = () => {
    let { detailId } = useParams();
    const [details, setDetails] = useState([])
    const [singleDetails, setSingleDetails] = useState([]);
    useEffect(() => {
        fetch("/projects.json")
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);
    useEffect(() => {
        const foundDetails = details.find(pj => pj?.id == detailId)
        setSingleDetails(foundDetails);
    }, [details])
    console.log(details);
    return (
        <Container>
            <h1>{singleDetails?.name}</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                 {singleDetails?.shortDescription}
                 <h3>Technology Used: {singleDetails?.Technology} </h3>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                 <img style={{width:"50%",height:"400px"}} src={singleDetails?.imgGrp?.img1} alt=""/>
                 <img style={{width:"50%"}} src={singleDetails?.imgGrp?.img2} alt=""/>
                 <img style={{width:"50%"}} src={singleDetails?.imgGrp?.img3} alt=""/>
                 <img style={{width:"50%"}} src={singleDetails?.imgGrp?.img4} alt=""/>
                 <img style={{width:"50%"}} src={singleDetails?.imgGrp?.img5} alt=""/>
                 <img style={{width:"50%"}} src={singleDetails?.imgGrp?.img6} alt=""/>
                 <img style={{width:"50%"}} src={singleDetails?.imgGrp?.img7} alt=""/>
                 <img style={{width:"50%"}} src={singleDetails?.imgGrp?.img8} alt=""/> 
                 <img style={{width:"50%"}} src={singleDetails?.imgGrp?.img9} alt=""/> 
                 <img style={{width:"50%"}} src={singleDetails?.imgGrp?.img10} alt=""/> 
                 <img style={{width:"50%"}} src={singleDetails?.imgGrp?.img11} alt=""/> 
                 <img style={{width:"50%"}} src={singleDetails?.imgGrp?.img12} alt=""/> 
                 <img style={{width:"50%"}} src={singleDetails?.imgGrp?.img13} alt=""/> 
                 <img style={{width:"50%"}} src={singleDetails?.imgGrp?.img14} alt=""/> 
                 <img style={{width:"50%"}} src={singleDetails?.imgGrp?.img15} alt=""/> 
                 <img style={{width:"50%"}} src={singleDetails?.imgGrp?.img16} alt=""/> 
                 <div style={{marginTop:"7%",marginBottom:"7%"}}>
                 <a style={{textDecoration:"none",margin:"5%"}} href={singleDetails?.live}><Button style={{backgroundColor:"salmon",color:"white"}}>Live Website</Button></a> <a style={{textDecoration:"none",margin:"5%"}} href={singleDetails?.client}><Button style={{backgroundColor:"salmon",color:"white"}}>GitHub Client Side</Button></a>  <a style={{textDecoration:"none",margin:"5%"}} href={singleDetails?.server}><Button style={{backgroundColor:"salmon",color:"white"}}>GitHub Server Side</Button></a> 
                 </div>
                </Grid>

            </Grid>

        </Container>
    );
};

export default ProjectDetail;