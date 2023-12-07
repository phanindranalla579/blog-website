import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Addproduct = () => {
    const navigate = useNavigate( )
    const[val,setVal]=useState({
        topic:"",
        header:"",
        content:""
    })
    const changeFun = (e)=>{
        const{value,name}=e.target;
        setVal((obj)=>{
            return({
                ...obj,
                [name]:value
            })
        })
    }
    const submintFun=async(e)=>{
        e.preventDefault()
        let result = await fetch('https://blogs-site-f4ki.onrender.com/admin/addProduct',{
            method:'post',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(val)
        })
        result = await result.json()
        if(result){
            navigate('/admin/product')
          }
    }
  return (
    <div className='loginDiv'>
        <form onSubmit={submintFun} className='loginForm' >
            <input type="text" name='topic'onChange={changeFun}  placeholder='Enter your topic'/>
            <input type="text" name='header' onChange={changeFun} placeholder='Enter your header'/>
            <textarea  rows="5" onChange={changeFun} name="content" placeholder='Enter your content'></textarea>
          
            <button>Add</button>
        </form>
    </div>
  )
}

export default Addproduct