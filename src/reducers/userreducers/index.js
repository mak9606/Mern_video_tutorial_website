import { combineReducers } from "redux";
import user from './userReducer';
import instructor from '../instructorReducer';
import video from '../videoReducer';
import oneVideo from '../OneVideoReducer';
import comment from '../commentReducer';
import update from '../updateReducers';
import admin from '../adminReducer';
import Cookie from 'js-cookie';

const userInfo=Cookie.getJSON("userInfo") || null;
const instructorInfo=Cookie.getJSON("instructorInfo") || null;
const adminInfo=Cookie.getJSON("adminInfo") || null;

export const initialState={user:{userInfo},instructor:{instructorInfo},admin:{adminInfo}};
export default combineReducers({user,instructor,video,oneVideo,comment,update,admin});