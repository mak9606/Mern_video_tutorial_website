import React from 'react';
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const VideoConfirmed = () => {
    return (
        <div style={{margin:'200px 30px'}}>
            <Typography variant="subtitle1" style={{color:"#FFF"}}>Video added succcesfully. <Link to="/addvideo" style={{textDecoration:"none",color:"#23A455"}}>Back</Link></Typography>
        </div>
    )
}

export default VideoConfirmed;
