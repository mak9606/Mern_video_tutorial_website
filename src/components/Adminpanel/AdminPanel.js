import { Button, CircularProgress, Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { deleteVideoData } from '../../actions/OneVideoactions';
import { getVideoData } from '../../actions/Videoactions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { Table } from 'react-bootstrap';


const AdminPanel = () => {
    const [condition, setCondition] = useState(false);
    const dispatch = useDispatch();
    const video=useSelector((state)=>state.video);
    const admin=useSelector((state)=>state.admin);
    const {adminInfo}=admin;
    const history=useHistory();
    useEffect(() => {
            if(!adminInfo){
                history.push('/');
            }
        dispatch(getVideoData());
    }, [adminInfo]);

    setTimeout(() => {
        setCondition(true);
    }, 4000);
    return (
        (!video && !condition)?(<div><CircularProgress /></div>): (
        <div align="center" style={{margin:"200px 100px"}}>
            <Grid container>
                <Grid item xs={12} sm={12}>
                <div align="center">
        <VideoLibraryIcon style={{color:"#23A455",fontSize:"50"}}/>               
         </div>
     <Typography align="center" variant="h4" style={{color:"#23A455",margin:"50px 0"}}  >Admin Panel</Typography>
            <TableContainer component={Paper}>      
            <Table  aria-label="simple table">
                <TableHead >
                    <TableRow >
                        <TableCell style={{color:"#23A455"}}>Creator Name </TableCell>&emsp;
                        <TableCell align="center" style={{color:"#23A455"}}>Creator Email </TableCell>&emsp;
                        <TableCell align="center"style={{color:"#23A455"}} >Video Title  </TableCell>&emsp;
                        <TableCell align="center" style={{color:"#23A455"}}>Category</TableCell>&emsp;
                        <TableCell align="center" style={{color:"#23A455"}}>Approved </TableCell>&emsp;
                        <TableCell align="center" style={{color:"#23A455"}}>Image Link</TableCell>&emsp;
                        <TableCell align="center" style={{color:"#23A455"}}>Video Link</TableCell>&emsp;
                        <TableCell align="center" style={{color:"#23A455"}} >Action</TableCell>&emsp;
                        </TableRow>
                        </TableHead>
                    
                    <TableBody>
                        {video.map((videoData)=>(
                         <TableRow key={videoData._id}  >
                         <TableCell component="th" scope="row" style={{color:"#000"}} > {videoData.creator}</TableCell>&emsp;
                         <TableCell align="center" style={{color:"#000"}}> {videoData.email}</TableCell>&emsp;
                         <TableCell align="center" style={{color:"#000"}}>{videoData.title} </TableCell>&emsp;
                         <TableCell align="center" style={{color:"#000"}}>{videoData.premium?"Premium":"Free"} </TableCell>&emsp;
                         <TableCell align="center" style={{color:"#000"}} > {videoData.approved?"True":"False"}</TableCell>&emsp;
                         <TableCell align="center" style={{color:"#000"}}><a href={videoData.image} target="_blank"><img src={videoData.image} alt="" width="40px" height="40px"/></a> </TableCell>&emsp;
                         <TableCell align="center" style={{color:"#000"}}><a href={videoData.video} target="_blank"><img src={videoData.image} alt="" width="40px" height="40px"/></a></TableCell>&emsp;
                         <TableCell align="center" style={{color:"#000"}}><Button varaint="contained" style={{backgroundColor:"#23A455",color:"#FFF"}}  onClick={()=>dispatch(deleteVideoData(videoData._id))}>Delete</Button> </TableCell>
                          </TableRow>
                        ))}
               
                    </TableBody>
                
            </Table>
            </TableContainer>
            </Grid>
            </Grid>
        </div>
        )
    )
}

export default AdminPanel;
