import * as api from '../api/Video';
import { SEND_COMMENT } from '../constants/videoConstants';

export const commentVideo=(id,comment)=>async (dispatch)=>{
    try {
        const data=await api.postComment(id,comment);
        dispatch({type:SEND_COMMENT, payload:data});
        console.log();
    } catch (error) {
        console.log(error);
    }
}
