import * as api from '../api/Video';
import { LIKE_VIDEO,DISLIKE_VIDEO,VIEWS_COUNT_VIDEO} from "../constants/videoConstants";

export const updateLikeVideo=(id)=>async (dispatch)=>{
    try {
        const updating=await api.likeVideo(id);
        dispatch({type:LIKE_VIDEO,payload:updating});
    } catch (error) {
        console.log(error);
    }
}

export const updateDislikeVideo=(id)=>async (dispatch)=>{
    try {
        const updating=await api.dislikeVideo(id);
        dispatch({type:DISLIKE_VIDEO,payload:updating});
    } catch (error) {
        console.log(error);
    }
}


export const watchVideo=(id)=>async (dispatch)=>{
    try {
        const updating=await api.watchcVideo(id);
        dispatch({type:VIEWS_COUNT_VIDEO,payload:updating});
    } catch (error) {
        console.log(error);
    }
}