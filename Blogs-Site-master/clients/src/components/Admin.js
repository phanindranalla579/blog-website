import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import {Link} from 'react-router-dom'

const Admin = () => {
    const navigate = useNavigate()
    const [val, setVal] = useState({
        email: "",
        password: ""
    })
    const changeFun = (e) => {
        const { value, name } = e.target;
        setVal((obj) => {
            return ({
                ...obj,
                [name]: value
            })
        })
    }
    const submitFun = async(e) => {
        e.preventDefault()
        let result = await fetch('https://blogs-site-f4ki.onrender.com/admin',{
            method:'post',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(val)
        })
        result = await result.json()
       localStorage.setItem('users',JSON.stringify(result))
       let data=localStorage.getItem('users')
        if(data){
            navigate('/admin/product')
        }else{
            alert('data not available')
        }
    }
    return (
        <div className='loginDiv'>
            <form onSubmit={submitFun} className='loginForm'>

                <input type="email" name="email" onChange={changeFun} placeholder='Enter the email' required/> 
                <input type="password" name="password" onChange={changeFun} placeholder='Enter the password' required />
                <div>

                
            <button>LogIn</button>
            <Link to='/admin/signup' className='signUplink'>SignUp</Link>
            </div>
            </form>
        </div>
    )
}

export default Admin