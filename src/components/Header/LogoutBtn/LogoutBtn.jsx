import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../../appwrite/auth'
import {storeLogout} from '../../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(storeLogout())
        })
    }
  return (
    <button
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn