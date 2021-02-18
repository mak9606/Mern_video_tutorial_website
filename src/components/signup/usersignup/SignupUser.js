import React, { useEffect, useState } from 'react';
import { Button, CircularProgress, Grid,Paper,TextField,Typography, } from "@material-ui/core";
import useStyles from './styles';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchNewUser } from '../../../actions/Useractions';

const SignupUser = () => {
    const classes=useStyles();
    const [signupUser, setSignupUser] = useState({
        name:"",
        email:"",
        password:""
    });
    const userR = useSelector(state => state.user);
    const {loading,errorInfo}=userR;
    const dispatch = useDispatch();
    const history=useHistory();



    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(fetchNewUser(signupUser));
        clear();        
        history.push('/registersuccess');

    }

    const clear=()=>{
        setSignupUser({
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
            <Typography align="center" variant="h4" style={{color:"#23A455"}} className={classes.mainheading}>Signup Student</Typography>
                <Paper elevation={2} style={{padding:'20px 0',marginBottom:"10px",borderRadius:"4px",backgroundColor:"#000"}}>
                    
                    <form onSubmit={handleSubmit}>
                    <div>
                        {loading && <div align="center"><CircularProgress style={{color:"#23A455"}}/></div>}
                        
                            {errorInfo && <div align="center" style={{color:"#FFF"}}>{errorInfo}</div>}
                        </div>
                        <div className={classes.control}>
                            <input type="text" required name="name" placeholder="Name" className={classes.input} label="Name" value={signupUser.name} onChange={(e)=>setSignupUser({...signupUser,name:e.target.value})} />
                            <br />
                            <br />
                            <input type="email" required  name="email" placeholder="Email" className={classes.input} label="Email" value={signupUser.email}  onChange={(e)=>setSignupUser({...signupUser,email:e.target.value})}/>
                            <br />
                            <br />
                            <input
                                type="password"
                                className={classes.input}
                                placeholder="Password"
                                required
                                value={signupUser.password} 
                                onChange={(e)=>setSignupUser({...signupUser,password:e.target.value})}
                                name="password"                            
             
                              />

                        </div>
                        <div className={classes.button} align="center">
                        <Button type="submit" style={{backgroundColor:"#23A455",color:"#FFF"}} variant="contained">Sign up</Button>
                        </div>
                    </form>
                </Paper>
                <Paper elevation={2} style={{padding:'20px 10px',marginBottom:"50px",borderRadius:"4px",backgroundColor:"#000"}}>
                    <Typography align="center" style={{color:"#FFF"}} variant="body1">Already a Member? <Link to="/loginuser" className={classes.link}>Login</Link></Typography>
                </Paper>
               </Grid>
            </Grid> 
        </>
    )
}

export default SignupUser;
