import axios from 'axios';


const url="https://video-tutorial96.herokuapp.com/instructor";

export const registerInstructor=(newInstructor)=>axios.post(`${url}/signup`,newInstructor);

export const loginInstructor=(checkInstructor)=>axios.post(`${url}/login`,checkInstructor);