import React from 'react';
import {Logo , LogoutBtn,Container} from "../index"
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
    const authStatus =useSelector((state)=>{
        state.auth.status
    })

    const navigate =useNavigate();
   const navItems = [{
        name: 'Home',
        slug: "/",
        active: true
    },
    {
name: 'Login',
slug: "/",
active : !authStatus,
    },
    {
        name: "signup",
        slug: "/login",
        active: !authStatus,
    },
    {
        name: "All-Posts",
        slug: "/signup",
        active : !authStatus
    },
    {
        name: "Add-Posts",
        slug: "/add-post",
        active:authStatus,
    }
    ]

  return (
   <header className='py-3 shadow bg-gray-500'>
    <Container>
        <nav className='flex'>
        <div className='mr-4'>
            <Link to ='/'>
                <Logo width= '70px'/>
            </Link>
        </div>
       <ul className='flex ml-auto'>
        {navItems.map((item)=>
        item.active ?(
            <li key={item.name}>
            <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={()=>navigate(item.slug)}></button>
            </li>
        ) : null)}
       </ul>

       {authStatus && (
        <LogoutBtn/>
       )}

        </nav>
    </Container>

   </header>
  )
}

export default Header