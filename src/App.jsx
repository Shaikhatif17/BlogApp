
import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import {login , logout} from "./Store/authSlice"
import authService from  './appWrite/auth'
import {Header ,Footer} from "./Components/index"
import { Outlet } from 'react-router-dom'



function App() {
const [loading,setLoading]= useState(true)
const dispatch = useDispatch();

useEffect(()=>{
authService.getCurrentUser()
.then((userData)=>{
  if(userData){
    dispatch(login({userData}))
  }
  else{
    dispatch(logout())
  }
})
.finally(()=>setLoading(false))
},[])

return !loading ?(
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>

    <div className='w-full block'></div>
    <Header/>
    <main>
      ToDo : <Outlet/>
    </main>
    <Footer/>
  </div>
) :null
}

export default App
