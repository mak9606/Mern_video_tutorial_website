import * as api from '../api/User';
import { ADD_USER, CHECK_USER, FAIL_ADD_USER, FAIL_USER, FIND_ADD_USER, FIND_USER } from "../constants/Constants";
import Cookie from "js-cookie";
export const fetchNewUser=(userData)=>async (dispatch)=>{
    dispatch({type:FIND_ADD_USER,payload:userData});
    try {
        const {data}=await api.registerUser(userData);
        dispatch({type:ADD_USER , payload:data});

    } catch (error) {
        dispatch({type:FAIL_ADD_USER,payload:error.message});    }


}

export const loginUser=(userData)=>async (dispatch)=>{
    dispatch({type:FIND_USER,payload:userData});
    try {
        const {data}=await api.loginUser(userData);
        dispatch({type:CHECK_USER , payload:data});
        Cookie.set('userInfo',JSON.stringify(data));
    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.message});
    }
}