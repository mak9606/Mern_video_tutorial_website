import React from 'react';
import { Paper,Button,Typography,Divider, Toolbar, Grid } from "@material-ui/core";
import useStyles from './styles';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { Link } from 'react-router-dom';


const Signup = () => {
    const classes=useStyles();
    return (
        <>
       
        <Grid container className={classes.item}>
            <Grid item xs={12} sm={4} >
                <div align="center">
                <VideoLibraryIcon style={{color:"#23A455",fontSize:"50"}}/>                </div>
            <Typography variant="h4" style={{color:"#23A455"}} className={classes.mainheading}>Welcome to Tutorial World</Typography>
            
           <Paper elevation={2} style={{backgroundColor:"#000"}}>
           <div className={classes.toolbar1}>
            <Typography className={classes.title} style={{color:"#FFF"}} variant="h6">Select Category to Sign up</Typography>
            </div>
            <div className={classes.buttons}>
                <Button component={Link} to='/usersignup' className={classes.button} variant="contained" size="large" fullWidth>Student</Button>
                <Divider className={classes.divider} />
                <Button component={Link} to='/instructorsignup'  className={classes.button} variant="contained" size="large" fullWidth>Instructor</Button>
                <Divider  className={classes.divider} />
            </div>
            </Paper> 
            </Grid>
        </Grid>
        </>
    )
}

export default Signup;
