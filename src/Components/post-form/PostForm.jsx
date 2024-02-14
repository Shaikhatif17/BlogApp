import React from 'react';
import {useForm} from 'react-hook-form';
import {Button, Input ,Select ,RTE} from "../index"
import service from '../../appWrite/config';
import { useNavigate } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux';}

function PostForm({post }) {
    const navigate = useNavigate();
 const {register,handleSubmit,watch,setValue,control,getValues}=useForm({
    defaultValues :{
        title :post?.title ||"",
        content:post?.content ||"",
        slug :post?.slug ||"",
        status :post?.status ||"active",
    }
 })
    const userData =useSelector((state)=>state.user.userData)
      const submit =async(data)=>{
        if(post){
           const file = data.image[0] ? service.uploadFile(data.image[0]) : null;
           if(file){
            service.deleteFile(post.featuredImage)
           }

           const dbPost = await service.updatePost(post.$id, {
            ...data, featuredImage :file ?file.$id :post.featuredImage
           })

        }
      }

  return (
    <div>
      
    </div>
  )
}

export default PostForm
