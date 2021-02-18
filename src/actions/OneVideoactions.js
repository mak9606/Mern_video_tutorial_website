import * as api from '../api/Video';
import { DELETE_VIDEO, FETCH_ONE} from "../constants/videoConstants";


export const getSpecificVideoData=(id)=>async (dispatch)=>{
   
    try {
        const {data}=await api.getSpecificVideos(id);
        console.log(data);
        dispatch({type:FETCH_ONE,payload:data});
    } catch (error) {
        console.log(error);
    }

}

export const deleteVideoData=(id)=>async (dispatch)=>{
    try {
        await api.deleteVideo(id);
        dispatch({type:DELETE_VIDEO,payload:id});
    } catch (error) {
        console.log(error);
    }
}