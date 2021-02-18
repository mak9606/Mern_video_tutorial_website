import { LIKE_VIDEO,DISLIKE_VIDEO,VIEWS_COUNT_VIDEO} from "../constants/videoConstants";

export default (update=[],action)=>{
    switch(action.type){
        case LIKE_VIDEO:
            return update.map((video)=>video._id===action.payload.id?action.payload:video);

        case VIEWS_COUNT_VIDEO:
            return update.map((video)=>video._id===action.payload.id?action.payload:video);
        case DISLIKE_VIDEO:
            return update.map((video)=>video._id===action.payload.id?action.payload:video);

        default: 
            return update;
        
    }
}