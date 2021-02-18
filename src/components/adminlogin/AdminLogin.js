import React, { useEffect, useState } from 'react';
import { Button, CircularProgress, Grid,Paper,TextField,Typography, } from "@material-ui/core";
import useStyles from './styles';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginAdminData } from '../../actions/Adminactions';




const AdminLogin = () => {
    const classes=useStyles();
    const [loginAdmin, setLoginAdmin] = useState({
       
        email:"",
        password:""
    });
    const adminR=useSelector((state)=>state.admin);
    const {loading,adminInfo,error}=adminR;
    const history=useHistory();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(adminInfo){
           history.push('/adminpanel');
           
        }
     
    },[adminInfo]);


    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(loginAdminData(loginAdmin));

        clear();
    }

    const clear=()=>{
        setLoginAdmin({
            email:"",
            password:"" 
        });
    }
    return (
<>
           <Grid container className={classes.item}>
               <Grid item xs={12} sm={4}>
               <div align="center">
               <VideoLibraryIcon style={{color:"#23A455",fontSize:"50"}}/>               
                </div>
            <Typography align="center" variant="h4" style={{color:"#23A455"}} className={classes.mainheading}>Login User</Typography>
                <Paper elevation={2} style={{padding:'20px 0',marginBottom:"10px",borderRadius:"4px",backgroundColor:"#000"}}>
                    
                    <form onSubmit={handleSubmit}>
                        <div>
                        {loading && <div align="center"><CircularProgress style={{color:"#23A455"}}/></div>}
                            {error && <div align="center" style={{color:"#FFF"}}>"Invalid Email or Password"</div>}
                        </div>
                        <div className={classes.control}>
                            <input type="email" className={classes.input} required name="email" placeholder="Email" value={loginAdmin.email} onChange={(e)=>setLoginAdmin({...loginAdmin,email:e.target.value})} fullWidth label="Email" name="email" />
                            <br />
                            <br />
                            <input
                                type="password"
                                className={classes.input}
                                placeholder="Password"
                                required
                                name="password" 
                                value={loginAdmin.password}
                                onChange={(e)=>setLoginAdmin({...loginAdmin,password:e.target.value})}
                           
                              />

                        </div>
                        <div className={classes.button} align="center">
                        <Button type="submit" style={{backgroundColor:"#23A455",color:"#FFF"}}  variant="contained">Login</Button>
                        </div>
                    </form>
                </Paper>
                <Paper elevation={2} style={{padding:'20px 10px',marginBottom:"50px",borderRadius:"4px",backgroundColor:"#000"}}>
                    <Typography align="center" style={{color:"#FFF"}} variant="body1">Not a Member? <Link to="/usersignup" className={classes.link}>Join now</Link></Typography>
                </Paper>
               </Grid>
            </Grid> 
        </>
    )
}

export default AdminLogin;
