
import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import {login , logout} from "./Store/authSlice"
import authService from  './appWrite/auth'
import {Header ,Footer} from "./Components/index"



function App() {
const [loading,setLoading]= useState(true)
const dispatch = useDispatch();

useEffect(()=>{
authService.getCurrentUser()
.then((userData)=>{
  if(userData){
    dispatch(login)
  }
  else{
    dispatch(logout)
  }
})
.finally(()=>setLoading(false))
},[])

return !loading ?(
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <h1>login successfully</h1>
    <div className='w-full block'></div>
    <Header/>
    <main>
      {/* <outlet/> */}
    </main>
    <Footer/>
  </div>
) :null
}

export default App
