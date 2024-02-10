import React from 'react';
import authService from '../../appWrite/auth';
import { logout } from '../../Store/authSlice';import { useDispatch } from 'react-redux';


function LogoutBtn() {
    const dispatch = useDispatch()
const logOutHandler = ()=>{
    authService.logout().then(()=>{
        dispatch(logout());
    })
}
  return (
    <button 
    className='incline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>LogOut</button>
  )
}

export default LogoutBtn