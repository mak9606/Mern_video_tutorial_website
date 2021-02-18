import * as api from '../api/Video';
import {  GET_ALL,  POST_DATA , SEND_POST, POST_ERROR } from "../constants/videoConstants";


export const getVideoData=()=>async (dispatch)=> {
    try {
        const {data}=await api.getVideos();
     

        dispatch({type:GET_ALL,payload:data});

    } catch (error) {
        console.log(error);
    }



}

export const postVideoData=(videoD)=>async (dispatch)=>{

   dispatch({type:SEND_POST,payload:videoD});
    try {
        const {data}=await api.postVideos(videoD);
        dispatch({type:POST_DATA,payload:data});
    } catch (error) {
        dispatch({type:POST_ERROR,payload:error.message})
    }
}

