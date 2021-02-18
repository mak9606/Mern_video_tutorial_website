import axios from 'axios';

const url="https://video-tutorial96.herokuapp.com/user";

export const registerUser=(newUser)=>axios.post(`${url}/signup`,newUser);

export const loginUser=(checkUser)=>axios.post(`${url}/login`,checkUser);

