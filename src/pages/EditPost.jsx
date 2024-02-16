import React, { useEffect, useState } from 'react';
import {Container ,PostForm} from "../Components"
import { useParams,useNavigate} from 'react-router-dom';
import service from '../appWrite/config';

function EditPost () {
  const [post ,setPost]= useState(null)
  const{slug}= useParams()
  const navigate =useNavigate()

  useEffect(()=>{
    if(slug){
      service.getPost(slug).then((post)=>{
        if(post){
          setPost(post)
        }
      })
    }
  },[])
  return (
    <div>
      
    </div>
  )
}

export default EditPost 
