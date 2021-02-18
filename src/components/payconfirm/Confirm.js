import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

const Confirm = () => {
  const [show, setShow] = useState(true);
    return (
     <div align="center" style={{marginTop:"200px"}}>
  <Toast  onClose={() => setShow(false)} show={show} delay={15000} autohide style={{backgroundColor:"#000"}}>
    <Toast.Header style={{backgroundColor:"#000"}}>
    <VideoLibraryIcon style={{color:"#23A455",fontSize:"20"}}/>&nbsp;             
      <strong className="mr-auto" style={{color:"#23A455"}}>Confirmation Recieved</strong>
      <small style={{color:"#FFF"}}>just now</small>
    </Toast.Header>
    <Toast.Body style={{color:"#23A455"}}>You will be allowed access within next 24 hours after 
      payment verification.
    </Toast.Body>
  </Toast>


</div> 
        
    )
}

export default Confirm;
