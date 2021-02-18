import { ADD_USER, CHECK_USER, FAIL_ADD_USER, FAIL_USER, FIND_ADD_USER, FIND_USER } from "../../constants/Constants";

export default (user=[],action)=>{
switch(action.type){

    case FIND_ADD_USER:
        return {loading:true};

    case ADD_USER:
        return [{loading:false,...user,registerInfo:action.payload}];

        case FAIL_ADD_USER:
        return {loading:false, errorInfo:action.payload};

    case FIND_USER:
        return {loading:true};

     case CHECK_USER:
        return {loading:false,userInfo:action.payload};

    case FAIL_USER:
        return {loading:false, error:action.payload};
    
    default:
        return user;
}
}