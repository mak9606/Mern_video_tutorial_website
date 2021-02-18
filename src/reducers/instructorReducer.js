import { FIND_ADD_INSTRUCTOR,ADD_INSTRUCTOR,CHECK_INSTRUCTOR, FAIL_INSTRUCTOR, FIND_INSTRUCTOR,FAIL_ADD_INSTRUCTOR } from "../constants/Constantsinstructor";


export default (instructor=[],action)=>{
    switch(action.type){
              
        case FIND_ADD_INSTRUCTOR:
            return {loading:true}

        case ADD_INSTRUCTOR:
            return [{loading:false,...instructor,registerInfo:action.payload}];
        

            case FAIL_ADD_INSTRUCTOR:
                return {loading:false, errorInfo:action.payload};
            

        case FIND_INSTRUCTOR:
            return {loading:true}

         case CHECK_INSTRUCTOR:
            return {loading:false,instructorInfo:action.payload};

        case FAIL_INSTRUCTOR:
            return {loading:false, error:action.payload};
        
        default:
            return instructor;
    }
    }