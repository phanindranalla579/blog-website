import React, { useEffect, useState } from 'react'
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

import { Link } from 'react-router-dom'

const Product = () => {
    const [val, setVal] = useState()
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        let result = await fetch('https://blogs-site-f4ki.onrender.com/admin/product', {
            method: 'get',
            headers: { 'content-type': 'application/json' }

        })
        result = await result.json()
        setVal(result)

    }
    const clickFun = async (id) => {
        let result = await fetch(`https://blogs-site-f4ki.onrender.com/admin/product/${id}`, {
            method: "delete",
            headers: { 'content-type': 'application/json' }
        })
        result = await result.json()
        if (result) {
            getData()
            console.log('succesfully')
        }
    }
    return (

        <div className='productDiv' >
    
        {
            val && val.map((value)=>{
                return(
                    <div className='innerDiv' key={value._id}>
                        <h1>{value.header}</h1>
                        <p>{value.content}</p>
                        <div className='icon'>
                        <HighlightOffOutlinedIcon className='icon2link' onClick={() => clickFun(value._id)} />
                        <Link to={`/admin/updateProduct/${value._id}`} className='icon2link'>
                        <DriveFileRenameOutlineOutlinedIcon className='icon2 '  />
                        </Link>
                        </div>
                    </div>
                )
            })
        }
         </div>


    )
}

export default Product