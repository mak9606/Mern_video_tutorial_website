import axios from 'axios';

const url="https://video-tutorial96.herokuapp.com/videos";

export const getVideos=()=>axios.get(url);

export const postVideos=(videoData)=>axios.post(url,videoData);

export const getSpecificVideos=(id)=>axios.get(`${url}/${id}`);

export const postComment=(id,comment)=>axios.patch(`${url}/${id}/comment`,comment);

export const likeVideo=(id)=>axios.patch(`${url}/${id}/like`);

export const dislikeVideo=(id)=>axios.patch(`${url}/${id}/dislike`);

export const watchcVideo=(id)=>axios.patch(`${url}/${id}/watchc`);

export const deleteVideo=(id)=>axios.delete(`${url}/${id}`);