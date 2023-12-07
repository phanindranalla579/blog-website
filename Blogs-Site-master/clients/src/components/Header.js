import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Header = () => {

    const params = useParams()
   
    const [header, setHeader] = useState()
    const [content, setContent] = useState()
    useEffect(() => {
        async function getData() {
            let result = await fetch(`https://blogs-site-f4ki.onrender.com/header/${params.id}`)
            result = await result.json()
           
            setHeader(result.header)
            setContent(result.content)
    
        }
        getData()
    }, [params.id])
  

    
    return (
        <div className='headerDiv'>
            <div className='headerinnerDiv innerDiv' >
                <h1>{header}</h1>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Header