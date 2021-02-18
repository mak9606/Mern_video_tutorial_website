import React from 'react';
import {  Button,Typography } from "@material-ui/core";
import { Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import useStyles from './styles';



const VideoItems = ({video,searchData,setcurrentId}) => {
    const classes=useStyles();
    const history=useHistory();
    const handleSubmit=()=>{
      if(video.premium){
        history.push('/premium');
      }
      else{
        setcurrentId(video._id);
        
          history.push(`/watchvideo/${video._id}`);
       
        
     
      }
    }
    


    return (
           
            <Card style={{ width: '18rem',marginBottom:"20px",backgroundColor:'#000' }}>
  <Card.Img variant="top" src={video.image} width="300px" height="200px"/>
  <Card.Body>
    <Card.Title><Typography variant="h5" style={{color:"#FFF"}}>{video.title}</Typography></Card.Title>
    <Card.Text>
       <Typography variant="subtitle2" style={{color:"#7A7A7A"}}>By {video.creator}</Typography>
    </Card.Text>
  </Card.Body>
        <Typography variant="subtitle1" color="textSecondary" style={{color:"#7A7A7A"}}>{video.premium? "Premium":"Free"}</Typography>
  <Card.Body align="center" style={{margin:"10px 0"}}>
  <Button variant="contained" onClick={handleSubmit} className={classes.button}>Watch</Button>
  </Card.Body>
</Card>

    )
}

export default VideoItems;
