import * as api from '../api/admin';
import Cookie from "js-cookie";
import { CHECK_ADMIN, FAIL_ADMIN, FIND_ADMIN } from '../constants/AdminConstants';




export const loginAdminData=(userData)=>async (dispatch)=>{
    dispatch({type:FIND_ADMIN,payload:userData});
    try {
        const {data}=await api.loginAdmin(userData);
        dispatch({type:CHECK_ADMIN , payload:data});
        Cookie.set('adminInfo',JSON.stringify(data));
    } catch (error) {
        dispatch({type:FAIL_ADMIN,payload:error.message});
    }
}