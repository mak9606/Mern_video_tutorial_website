import * as api from '../api/Instructor';
import { ADD_INSTRUCTOR, CHECK_INSTRUCTOR, FAIL_INSTRUCTOR, FIND_ADD_INSTRUCTOR, FIND_INSTRUCTOR } from "../constants/Constantsinstructor";
import Cookie from 'js-cookie';

export const fetchNewUser=(userData)=>async (dispatch)=>{
    dispatch({type:FIND_ADD_INSTRUCTOR,payload:userData});
    try {
        const {data}=await api.registerInstructor(userData);
        dispatch({type:ADD_INSTRUCTOR,payload:data});

    } catch (error) {
        dispatch({type:FAIL_INSTRUCTOR,payload:error.message});    }


}

export const loginUser=(userData)=>async (dispatch)=>{
    dispatch({type:FIND_INSTRUCTOR,payload:userData});
    try {
        const {data}=await api.loginInstructor(userData);
        dispatch({type:CHECK_INSTRUCTOR,payload:data});
        Cookie.set('instructorInfo',JSON.stringify(data));
    } catch (error) {
        dispatch({type:FAIL_INSTRUCTOR,payload:error.message});
    }
}