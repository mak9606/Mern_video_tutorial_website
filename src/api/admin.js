import axios from 'axios';

const url="https://video-tutorial96.herokuapp.com/useran";


export const loginAdmin=(checkUser)=>axios.post(`${url}/login`,checkUser);

