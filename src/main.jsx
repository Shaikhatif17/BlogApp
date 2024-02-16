import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout,Login } from './Components/index.js'
import AddPost from "./pages/AddPost.jsx"
import Signup from './pages/Signup.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import AllPosts from './pages/AllPosts.jsx'


const router =createBrowserRouter([
  {
    path : "/",
  element :<App/>,
children :[
  {
    path :"/login",
    element :(
      <AuthLayout authentication={false}>
        <Login/>
      </AuthLayout>
    )},
    {
      path :"/signup",
      element :(
       <AuthLayout authentication={false}>
        <Signup/>
       </AuthLayout>
      )
    },

    {
      path : "/all-posts",
      element :(
        <AuthLayout authentication={true}>
          <AllPosts/>
        </AuthLayout>
      )
    },
    {
      path: "/add-post",
      element :(
        <AuthLayout authentication={true}>
          <AddPost/>
        </AuthLayout>
      )
    },
    {
      path :"/edit-post/:slug",
      element :(
  <AuthLayout authentication={true}>
    <EditPost/>
  </AuthLayout>
      )
    },
    {
      path: "/post/:slug",
      element :<Post/>
    }
]}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <RouterProvider router={router}/>
  </Provider>
)
