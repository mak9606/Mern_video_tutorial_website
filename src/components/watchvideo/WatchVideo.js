import React, { useEffect, useState } from 'react';
import { CircularProgress, Typography,IconButton,Grid,Divider, Button } from "@material-ui/core";
import VideoPlayer from 'react-video-js-player';
import './video.css';
import { useDispatch, useSelector } from 'react-redux';
import {getSpecificVideoData} from '../../actions/OneVideoactions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import useStyles from './styles';
import { commentVideo } from '../../actions/Commentaction';
import { updateDislikeVideo, updateLikeVideo, watchVideo } from '../../actions/Updateactions';

const WatchVideo = (props) => {
    const classes=useStyles();
    const [condition, setCondition] = useState(false);
    const [commentData, setComment] = useState("");
    const userR=useSelector((state)=>state.user);
    const {userInfo}=userR;
    const dispatch = useDispatch();
   const id=props.match.params.id;
       
  
  
   useEffect(() => {
    dispatch(getSpecificVideoData(id));
    
}, [dispatch]) ;
    
    setTimeout(() => {
        setCondition(true);
    }, 4000);
    
   
    const videoData = useSelector(state =>state.oneVideo);
    
    
  



    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(userInfo){
             // dispatch(commentVideo(id,commentData));
        }else{
            alert("You need to Login as student to comment");        

        }
       
        
        clear();
    }

const clear=()=>{
    setComment("");
}

    return (
        !condition ?(<div align="center" style={{marginTop:"200px"}}> <CircularProgress style={{color:"#61CE70"}}/></div>):
       (<Grid container justify="center">
           <Grid item xs={12} sm={6}>
            <VideoPlayer
            src={videoData.video}
            poster={videoData.image}
            onPlay={()=>dispatch(watchVideo(videoData._id))}
            width="640"
            height="480"
            playbackRates={[0.5,1,1.5,2]
            }
           
            />
            <div style={{margin:"20px 20px"}}>
                <Typography variant="h4"style={{color:"#FFF"}}>{videoData.title}</Typography>
            </div>
            <div className="vattributes">
            <div className="views">
                <Typography variant="subtitle1" color="textSecondary" style={{color:"#61CE70"}}>{videoData.watchcount} views</Typography>
            </div>
            <div ><IconButton style={{color:"#61CE70"}} onClick={()=>dispatch(updateLikeVideo(videoData._id))}><ThumbUpIcon />&nbsp; {videoData.likecount}
            </IconButton> 
                <IconButton style={{color:"#61CE70"}} onClick={()=>dispatch(updateDislikeVideo(videoData._id))}><ThumbDownAltIcon />&nbsp; {videoData.dislikecount}</IconButton>
            </div>
            </div>
            <Divider className={classes.divider}/>
            <div style={{margin:"0 15px"}}>
                <Typography variant="h6" style={{color:"#FFF"}}>Leave a Comment</Typography>
            <form className={classes.form} onSubmit={handleSubmit} >
              
                <textarea className="areatext" placeholder="Comment" name="comment" value={commentData} onChange={(e)=>setComment(e.target.value)}/>
                <div className={classes.button}>
                <Button type="submit"  variant="contained" style={{backgroundColor:"#61CE70",color:"#FFF"}}>Comment</Button>
                </div>
            </form>
            </div>
            <Divider className={classes.divider}/>


            </Grid>
        </Grid>)
    )
}

export default WatchVideo;
