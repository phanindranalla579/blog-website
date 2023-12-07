import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router'

const Updateproduct = () => {
    const params = useParams()

    const navigate = useNavigate()
    const[topic,setTopic]=useState()
    const[header,setHeader]=useState()
    const[content,setContent]=useState()
    
    // const getData = async()=>{
    //     let result = await fetch(`https://blogs-site-f4ki.onrender.com/admin/updateProduct/${params.id}`)
    //     result = await result.json()
    //     setTopic(result.topic)
    //     setHeader(result.header)
    //     setContent(result.content)
       
    // }
    useEffect(()=>{
        
        async function getData(){
            let result = await fetch(`https://blogs-site-f4ki.onrender.com/admin/updateProduct/${params.id}`)
            result = await result.json()
            setTopic(result.topic)
            setHeader(result.header)
            setContent(result.content)
           
        }
        getData()
    },[params.id])
    const change1Fun = (e) => {
        setTopic(e.target.value)
    }
    const change2Fun = (e) => {
        setHeader(e.target.value)
    }
    const change3Fun = (e) => {
        setContent(e.target.value)
    }
    const submintFun = async(e) => {
        e.preventDefault()
        let result = await fetch(`https://blogs-site-f4ki.onrender.com/admin/updateProduct/${params.id}`,{
            method:'put',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({topic,header,content})
        })
        result = await result.json()
        if(result){
            navigate('/admin/product')
            console.log('sucesfully');
        }
      
    }
    return (
        <div className='loginDiv'>
            <form onSubmit={submintFun} className='loginForm' >
            
                <input type="text" name='topic' onChange={change1Fun}  value={topic}/>
                <input type="text" name='header' onChange={change2Fun} value={header} />
                <textarea placeholder='Massage....' rows="5" onChange={change3Fun} name="content" value={content}></textarea>
               
                <button>Add</button>
            </form>
        </div>
    )
}

export default Updateproduct