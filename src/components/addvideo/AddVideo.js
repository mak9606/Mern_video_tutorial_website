import React, { useEffect, useState } from 'react';
import { Typography,Paper,Grid,Button,FormLabel, CircularProgress } from "@material-ui/core";
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import useStyles from './styles';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { postVideoData } from '../../actions/Videoactions';
import { storage } from "../../firebase";




const AddVideo = () => {
    const classes=useStyles();



    const [creator, setCreator] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
    
    const history=useHistory();
    const adminR=useSelector((state)=>state.admin);
    const {adminInfo}=adminR;
    const insR=useSelector(state=>state.instructor);
    const{instructorInfo}=insR;
    const vidR = useSelector(state => state.video);
    const {loading,videoInfo,error}=vidR;
     const dispatch = useDispatch();
     const [imageS, setImageS] = useState(null);
     const [videoS, setVideoS] = useState(null);
     const [condition, setCondition] = useState(false);
     const [conditional, setConditional] = useState(false);
     

     

     useEffect(()=>{
        if(instructorInfo || adminInfo){
            history.push('/addvideo');

        }
        else{
            history.push('/');
        }
      

     },[instructorInfo,adminInfo]);

     
 
     useEffect(() => {
        if(image && video){
            let postVideo = {
                creator,
                title,
                email,
                image,
                video
            }
            
                 dispatch(postVideoData(postVideo));
        }
     }, [image,video]);

  
     useEffect(()=>{
        if(videoInfo && condition){
           history.push('/videoadded');
           
        }
    },[videoInfo]);

    const timeout=()=>{
        setTimeout(() => {
            setConditional(true);
        }, 3000);
    }


    

     const handleChange=(e)=>{
        if(e.target.files[0]){
            setImageS(e.target.files[0]);
        }
    }

    const handleVideo=(e)=>{
        if(e.target.files[0]){
            setVideoS(e.target.files[0]);
            timeout();
        }
    }



    const handleSubmit=async (e)=>{
        e.preventDefault();
        setCondition(true);
        
        
        await storage.ref(`/image/${imageS.name}`).put(imageS);

        const imageUrl = await storage
            .ref("image")
            .child(imageS.name)
            .getDownloadURL();


        await storage.ref(`/video/${videoS.name}`).put(videoS);

        const videoUrl = await storage
                .ref("video")
                .child(videoS.name)
                .getDownloadURL();


       await setImage(imageUrl);
       await  setVideo(videoUrl);

           



          
                
                
               


        

    }


    return(
    <>
    <Grid container className={classes.item}>
        <Grid item xs={12} sm={5} >
        <div align="center">
        <VideoLibraryIcon style={{color:"#23A455",fontSize:"50"}}/>               
         </div>
     <Typography align="center" variant="h4" style={{color:"#23A455"}}   className={classes.mainheading}>Add Video</Typography>
         <Paper elevation={2} style={{padding:'20px 0',marginBottom:"50px",borderRadius:"4px",backgroundColor:"#000"}}>

         {!loading && condition && <div align="center"><CircularProgress style={{color:"#23A455"}}/> <Typography variant="subtitle2" style={{color:"#23A455"}}>Uploading</Typography></div>}
         {loading && <div align="center"><CircularProgress style={{color:"#23A455"}}/> <Typography variant="subtitle2" style={{color:"#23A455"}}>Uploading</Typography></div>}
         {error && <div align="center" style={{color:"#FFF"}}>{error.message}</div>}

             <form onSubmit={handleSubmit}>

                 <div className={classes.control}>
                     <input type="text" required name="uname" placeholder="Name" style={{backgroundColor:"#FFF",width:"260px",height:"50px"}} value={creator} onChange={(e)=> setCreator(e.target.value)}/>
                     <br />
                     <br />
                     <input type="email" required name="email" placeholder="Email" style={{backgroundColor:"#FFF",width:"260px",height:"50px"}} value={email} onChange={(e)=> setEmail(e.target.value)}/>
                     <br />
                     <br />
                     <input type="text" required name="title" placeholder="Title" style={{backgroundColor:"#FFF",width:"260px",height:"50px"}} value={title} onChange={(e)=>setTitle(e.target.value)}/>
                     <br />
                     <br />
                    <div>
                    <FormLabel className={classes.label} style={{color:"#FFF"}}  component='legend'>Poster Image</FormLabel>
                        <input type="file" required style={{backgroundColor:"#FFF",width:"260px",height:"50px",padding:"10px"}} onChange={handleChange} />
                    </div>
                    <br />
                    
                    <div>
                    <FormLabel className={classes.label} style={{color:"#FFF"}} component='legend'>Video</FormLabel>                        
                    <input type="file" required style={{backgroundColor:"#FFF",width:"260px",height:"50px",padding:"10px"}} onChange={handleVideo} />
                    </div>

                 </div>
                 
                 <div className={classes.button} align="center">
                 <Button  type="submit" style={{backgroundColor:"#23A455",color:"#FFF"}} variant="contained">Add</Button>
                 </div>
             </form>
         </Paper>

        </Grid>
     </Grid> 
 </>
)
}

export default AddVideo;
