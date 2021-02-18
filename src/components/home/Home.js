import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import VideoItems from '../videoitems/VideoItems';
import { useDispatch, useSelector } from "react-redux";
import { getVideoData } from '../../actions/Videoactions';
import Cookie from 'js-cookie';
import { useHistory } from 'react-router-dom';
import Searchbar from '../search/Searchbar';




const Home = ({setcurrentId}) => {
    const [searchData, setSearchData] = useState('');
    const userDa = useSelector(state => state.user);
    const {userInfo}=userDa;
    const history=useHistory();
    const videoData=useSelector((state)=> state.video);
    const dispatch=useDispatch();
       

    useEffect(() => {
        dispatch(getVideoData());


        }, [dispatch]);

   

    return (
        !videoData.length? (<div align="center" style={{margin:"100px 0"}}><CircularProgress style={{color:"#61CE70"}}/></div>):(
        <div align="center">
            <Grid container>
                <Grid item xs={12}  >
                <Searchbar setSearchData={setSearchData}/>
                    </Grid>
                </Grid>
             <Typography variant="h3" gutterBottom style={{color:"#FFF",marginTop:'100px'}}>Video Tutorials</Typography>
             <br />
             <div style={{marginLeft:"20px"}}>
             <Grid container  >

                 {videoData.filter((video)=>{
                 if(searchData==""){
                     return video;
                 }else if(video.title.toLowerCase().includes(searchData.toLowerCase())){
                    return video;
                 }
                }
                 ).map((video)=>(
                     <Grid item key={video._id} xs={12} sm={6} md={6} lg={3}>

                        <VideoItems setcurrentId={setcurrentId}  searchData={searchData} video={video} />
                        </Grid>


                 ))}

             </Grid>
             </div>


        </div>
        )
    )
}

export default Home;




            {/* <div align="center">
            <ButtonGroup  disableElevation variant="contained" className={classes.spacing}>
                <Button className={classes.button}>Free</Button>
                <Button className={classes.button}>Premium</Button>
             </ButtonGroup>
             </div> */}