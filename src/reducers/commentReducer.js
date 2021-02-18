import { SEND_COMMENT } from '../constants/videoConstants';


export default (comment={},action)=>{

    switch(action.type){
        case SEND_COMMENT:
            return [...comment,action.paylaod];
        
        default:
            return comment;
    }
}