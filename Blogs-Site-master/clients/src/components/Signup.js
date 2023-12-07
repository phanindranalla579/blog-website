import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import {Link} from 'react-router-dom'
const Signup = () => {
    const navigate = useNavigate()
    const [val, setVal] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
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
    const submitFun = async (e) => {
        e.preventDefault()
        let result = await fetch('https://blogs-site-f4ki.onrender.com/admin/signup', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body:JSON.stringify(val)
        })
        result = await result.json()
        if(result){
            navigate('/admin')
        }
    }
    return (
        <div className='loginDiv'>
            <form onSubmit={submitFun} className='loginForm'>
            
                <input type="text" name="name" onChange={changeFun} placeholder='Enter your name' required/>
                <input type="email" name="email" onChange={changeFun} placeholder='Enter your email' required/>
                <input type="password" name="password" onChange={changeFun} placeholder='Enter the password ' required/>
                <input type="password" name="cpassword" onChange={changeFun} placeholder='Enter the confirm-password' required/>
                <div>
                <button>SignUp</button>
                <Link to='/admin' className='signUplink'>LogIn</Link>
                </div>
            </form>

        </div>
    )
}

export default Signup