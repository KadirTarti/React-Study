import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchFail, fetchStart } from '../features/authSlice'

const useAuthCall = () => {
  const dispatch = useDispatch()

  const register = async (userInfo) => {
    dispatch(fetchStart())
    try {
    const {data} = await axios.post('https://38103.fullstack.clarusway.com/users/', userInfo)
    console.log(data);
    } catch (error) {
        dispatch(fetchFail())
        console.log(error);
    }

  }
    return {register}
}

export default useAuthCall