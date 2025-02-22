import axios from 'axios';
import { LS_KEY } from './refs.js';

const token = localStorage.getItem(LS_KEY);
axios.defaults.baseURL = 'https://connections-api.goit.global/';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export async function registerUserService(user) {
    try{
const {data} = await axios.post('/users/signup', user);
return data;
    } catch(error){
        console.log(error.message);
    }
    
}