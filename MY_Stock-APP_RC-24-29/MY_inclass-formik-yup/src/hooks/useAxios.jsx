import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux'

export const axiosWithPublic = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

const useAxios = () => {
    const {token} = useSelector(state => state.auth)
    const instance = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
        headers: {"Authorization": `Token ${token}`},
    }); 
   return; 
}
export default useAxios