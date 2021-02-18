import { DELETE_VIDEO, FETCH_ONE} from "../constants/videoConstants";

export default (videos=[],action)=>{
    
    
    switch (action.type) {

 
    
        
        case FETCH_ONE:
            return action.payload;

        case DELETE_VIDEO:
            return videos.filter((video)=>video._id!==action.payload);

        default:
            return videos;
    }
}