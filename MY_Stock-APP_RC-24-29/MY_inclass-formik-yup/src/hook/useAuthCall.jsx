import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchFail, fetchStart, registerSuccess } from '../features/authSlice'

const useAuthCall = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const register = async (userInfo) => {
    dispatch(fetchStart())
    try {
        const {data} = await axios.post("https://10002.fullstack.clarusway.com/users/",userInfo)
        // console.log(data)
        dispatch (registerSuccess(data))
        navigate("/stock")
    } catch (error) {
        dispatch(fetchFail())
        console.log(error)
    }
  }

  return {register}
}

export default useAuthCall