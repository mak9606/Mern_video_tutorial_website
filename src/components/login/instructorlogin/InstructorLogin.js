import React, { useEffect, useState } from 'react';
import { Button, CircularProgress, Grid,Paper,Typography, } from "@material-ui/core";
import useStyles from './styles';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {  loginUser } from '../../../actions/Instructoractions';



const InstructorLogin = () => {
    const classes=useStyles();

    const [instructorLogin, setInstructorLogin] = useState({
       
        email:"",
        password:""
    });
    const instructorR=useSelector((state)=>state.instructor);
    const {loading,instructorInfo,error}=instructorR;
    const history=useHistory();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(instructorInfo)
        {
            history.push('/addvideo');
        }
    },[instructorInfo]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(loginUser(instructorLogin));
        clear();
    }
    
    const clear=()=>{
        setInstructorLogin({
            email:"",
            password:"" 
        });
    }

    return (
        <>
           <Grid container className={classes.item}>
               <Grid item xs={12} sm={4} >
               <div align="center">
               <VideoLibraryIcon style={{color:"#23A455",fontSize:"50"}}/>           

                </div>
            <Typography align="center" variant="h4" style={{color:"#23A455"}} className={classes.mainheading}>Login Instructor</Typography>
                <Paper elevation={2} style={{padding:'20px 0',marginBottom:"10px",borderRadius:"4px",backgroundColor:"#000"}}>
                    
                    <form onSubmit={handleSubmit}>
                        {loading &&<div align="center"><CircularProgress style={{color:"#23A455"}}/></div>}
                        {error && <div align="center" style={{color:"#FFF"}}>"Invalid Email or Password"</div>}
                        <div className={classes.control}>
                            <input type="email" required name="email" placeholder="Email" className={classes.input} label="Email" value={instructorLogin.email} onChange={(e)=>setInstructorLogin({...instructorLogin,email:e.target.value})}/>
                            <br />
                            <br />
                            <input
                                type="password"
                                className={classes.input}
                                placeholder="Password"  
                                required                              
                                value={instructorLogin.password}
                                onChange={(e)=>setInstructorLogin({...instructorLogin,password:e.target.value})}
                                name="password"
                                id="standard-password-input"
 
                              />

                        </div>
                        <div className={classes.button} align="center">
                        <Button type="submit" style={{backgroundColor:"#23A455",color:"#FFF"}} variant="contained">Login</Button>
                        </div>
                    </form>
                </Paper>
                <Paper elevation={2} style={{padding:'20px 10px',marginBottom:"50px",borderRadius:"4px",backgroundColor:"#000"}}>
                    <Typography align="center" variant="body1" style={{color:"#FFF"}}>Not a Member? <Link to="/instructorsignup" className={classes.link}>Join now</Link></Typography>
                </Paper>
               </Grid>
            </Grid> 
        </>
    )
}

export default InstructorLogin;
