import { CHECK_ADMIN, FAIL_ADMIN, FIND_ADMIN } from '../constants/AdminConstants';

export default (user=[],action)=>{
switch(action.type){
 

    case FIND_ADMIN:
        return {loading:true};

     case CHECK_ADMIN:
        return {loading:false,adminInfo:action.payload};

    case FAIL_ADMIN:
        return {loading:false, error:action.payload};
    
    default:
        return user;
}
}