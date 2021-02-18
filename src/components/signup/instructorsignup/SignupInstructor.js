import React, { useState } from 'react';
import { Button, CircularProgress, Grid,Paper,TextField,Typography, } from "@material-ui/core";
import useStyles from './style';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchNewUser } from '../../../actions/Instructoractions';

const SignupInstructor = () => {
    const classes=useStyles();
    const history=useHistory();
    const [instructorSignup, setInstructorSignup] = useState({
        name:"",
        email:"",
        password:""
    });
    const registerS = useSelector(state => state.instructor);
    const {loading,errorInfo}=registerS;
    const dispatch = useDispatch();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(fetchNewUser(instructorSignup));
        clear();       
        history.push('/insregistersuccess');
   
       
        
    }
    
    const clear=()=>{
        setInstructorSignup({
            name:"",
            email:"",
            password:"" 
        });
    }

    return (
        <>
           <Grid container className={classes.item}>
               <Grid item xs={12} sm={4} md={3}>
               <div align="center">
               <VideoLibraryIcon style={{color:"#23A455",fontSize:"50"}}/>               
                </div>
            <Typography align="center" variant="h4"  style={{color:"#23A455"}} className={classes.mainheading}>Signup Instructor</Typography>
                <Paper elevation={2} style={{padding:'20px 0',marginBottom:"10px",borderRadius:"4px",backgroundColor:"#000"}}>
                    {loading && <div align="center"><CircularProgress  style={{color:"#23A455"}}/></div>}
                    {errorInfo && <div align="center"  style={{color:"#FFF"}}>{errorInfo}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className={classes.control}>
                        <input type="text" required name="name" placeholder="Name" className={classes.input} value={instructorSignup.name} onChange={(e)=>setInstructorSignup({...instructorSignup,name:e.target.value})}/>
                            <br />
                            <br />
                            <input type="email" required name="email" placeholder="Email" className={classes.input} value={instructorSignup.email} onChange={(e)=>setInstructorSignup({...instructorSignup,email:e.target.value})}/>
                            <br />
                            <br />
                            <input
                                type="password"
                                className={classes.input}
                                placeholder="Password"
                                required
                                value={instructorSignup.password} 
                                onChange={(e)=>setInstructorSignup({...instructorSignup,password:e.target.value})}
                                name="password"
                                id="standard-password-input"

                              />

                        </div>
                        <div className={classes.button} align="center">
                        <Button type="submit" style={{backgroundColor:"#23A455",color:"#FFF"}} variant="contained">Sign up</Button>
                        </div>
                    </form>
                </Paper>
                <Paper elevation={2} style={{padding:'20px 10px',marginBottom:"50px",borderRadius:"4px",backgroundColor:"#000"}}>
                    <Typography align="center" style={{color:"#FFF"}} variant="body1">Already a Member? <Link to="/logininstructor" className={classes.link}>Login</Link></Typography>
                </Paper>
               </Grid>
            </Grid> 
        </>
    )
}

export default SignupInstructor;
