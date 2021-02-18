import React, { useState } from 'react';
import Cookie from 'js-cookie';
import { Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Divider, Grid, List, ListItem, ListItemText, Paper, TextField, Typography } from '@material-ui/core';
import useStyles from './styles';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { Link, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

const Premium = () => {
    const classes=useStyles();
    const loginUser=Cookie.get('userInfo');
    const user=useSelector((state)=>state.user);
    const {userInfo}=user;
    const [show, setShow] = useState(true);
    const history=useHistory();

    const submitHandler=(e)=>{
        e.preventDefault();
        history.push('/confirm');
    }
    return (
        !loginUser ?
       (
             <div align="center" style={{marginTop:"200px"}}>
  <Toast  onClose={() => setShow(false)} show={show} delay={15000} autohide style={{backgroundColor:"#000"}}>
    <Toast.Header style={{backgroundColor:"#000"}}>
    <VideoLibraryIcon style={{color:"#23A455",fontSize:"20"}}/>&nbsp;             
      <strong className="mr-auto" style={{color:"#23A455"}}>Premium?</strong>
      <small style={{color:"#FFF"}}>just now</small>
    </Toast.Header>
    <Toast.Body style={{color:"#23A455"}}>Need to Login as student to access.</Toast.Body>
  </Toast>


</div> 
        ):(
            <div align="center" style={{marginTop:"200px"}}>
               
           <Grid container className={classes.item}>
           <Grid item xs={12} sm={4} >
           <div align="center">
           <VideoLibraryIcon style={{color:"#23A455",fontSize:"50"}}/>               
           </div>
        <Typography align="center" variant="h4" style={{color:"#23A455"}} className={classes.mainheading}>Fee Voucher</Typography>
            <Paper elevation={2} style={{padding:'20px 0',marginBottom:"10px",borderRadius:"4px",backgroundColor:"#000"}}>
                
              

            <List disablePadding>
           
                <ListItem style={{padding:"20px 10px"}} >
                    <ListItemText style={{color:"#FFF"}} primary={userInfo.name} />
                    <Typography style={{color:"#FFF"}} variant="body2">{userInfo.email}</Typography>
                </ListItem>


                <ListItem style={{padding:"20px 10px "}}>
                <ListItemText style={{color:"#FFF"}} primary="Premium Cost"/>
                <Typography variant="subtitle1" style={{color:"#FFF"}}>
                   Rs: 4000
                </Typography>
             
             </ListItem>
             <ListItem style={{padding:"20px 10px ",display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
             <ListItemText style={{color:"#FFF"}} primary="Payment Account: Video Tutorial" />
             <Typography variant="subtitle2" style={{color:"#FFF",fontSize:"14px"}}>(Confirm payment with receipt below)</Typography>

          
          </ListItem>
                <Divider style={{margin:"20px 0"}}/>
                   <ListItem style={{padding:"10px 10px",}}>
                       <ListItemText style={{color:"#FFF"}} primary="Total"/>
                       <Typography variant="subtitle1" style={{fontWeight:700,color:"#FFF"}}>
                           Rs: 4000
                       </Typography>
                    
                    </ListItem>
         </List> 
      
            </Paper>

            <Paper elevation={2}  style={{padding:'20px 10px',margin:"50px 0",borderRadius:"4px",backgroundColor:"#000"}}>
            <Typography align="center" variant="h6" style={{color:"#FFF"}} gutterBottom>Confirm Payment</Typography>
            <form onSubmit={submitHandler}>
            <div style={{margin:"20px 0"}} >
           <Typography style={{margin:"10px 150px 10px 0"}} style={{color:"#FFF"}} variant="body2" gutterBottom>Upload Receipt Picture</Typography>
           
           <input required type="file" style={{backgroundColor:"#FFF",padding:"6px"}}  />
            
            </div>
            <Button type="submit" className={classes.link} variant="contained" color="primary">Confirm</Button>
            </form>
            </Paper>

           </Grid>
        </Grid> 
            </div>)
        
    )
}

export default Premium;
