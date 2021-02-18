import React, { useEffect, useState } from 'react';
import { Button, CircularProgress, Grid,Paper,Typography, } from "@material-ui/core";
import useStyles from './styles';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from '../../../actions/Useractions';

const UserLogin = () => {
    const classes=useStyles();
    const [loginUsers, setLoginUser] = useState({
       
        email:"",
        password:""
    });
    const userR=useSelector((state)=>state.user);
    const {loading,userInfo,error}=userR;
    const history=useHistory();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(userInfo){
           history.push('/');
           
        }
     
    },[userInfo]);


    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(loginUser(loginUsers));

        clear();
    }

    const clear=()=>{
        setLoginUser({
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
            <Typography align="center" variant="h4" style={{color:"#23A455"}} className={classes.mainheading}>Login Student</Typography>
                <Paper elevation={2} style={{padding:'20px 0',marginBottom:"10px",borderRadius:"7px",backgroundColor:"#000"}}>
                    
                    <form onSubmit={handleSubmit}>
                        <div>
                        {loading && <div align="center"><CircularProgress style={{color:"#23A455"}}/></div>}
                            {error && <div align="center" style={{color:"#FFF"}}>"Invalid Email or Password"</div>}
                        </div>
                        <div className={classes.control}>
                            <input type="email" className={classes.input} required name="email" placeholder="Email" label="Email" value={loginUsers.email} onChange={(e)=>setLoginUser({...loginUsers,email:e.target.value})}/>
                            <br />
                            <br />
                            <input
                                className={classes.input}
                                type="password"
                                placeholder="Password"
                                name="password"
                                required 
                                value={loginUsers.password}
                                onChange={(e)=>setLoginUser({...loginUsers,password:e.target.value})}
                                name="password"
                              />

                        </div>
                        <div className={classes.button} align="center">
                        <Button type="submit" style={{backgroundColor:"#23A455",color:"#FFF"}}  variant="contained">Login</Button>
                        </div>
                    </form>
                </Paper>
                <Paper elevation={2} style={{padding:'20px 10px',marginBottom:"50px",borderRadius:"4px",backgroundColor:"#000"}}>
                    <Typography align="center"  style={{color:"#FFF"}} variant="body1">Not a Member? <Link to="/usersignup" className={classes.link}>Join now</Link></Typography>
                </Paper>
               </Grid>
            </Grid> 
        </>
    )
}

export default UserLogin;
