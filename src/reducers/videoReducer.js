import { FETCH_ONE, GET_ALL,  POST_DATA , SEND_POST, POST_ERROR} from "../constants/videoConstants";

export default (videos=[],action)=>{
    
    
    switch (action.type) {



        case GET_ALL:
            return action.payload; 

        case SEND_POST:
                return {loading:true}; 
        
        case POST_DATA:
            return {loading:false,videoInfo:action.payload};

        case POST_ERROR:
            return {loading:false,error:action.payload};
        
    
        
        case FETCH_ONE:
            return action.payload;

        default:
            return videos;
    }
}