import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';

import CloseIcon from '@mui/icons-material/Close';
const Home = () => {
    const [val, setVal] = useState()
    const [headerval, setHeaderval] = useState()
    const [newArr, setnewarr] = useState()
    const navLineFun = () => {
        const navCrose = document.getElementById('navCrose')
        const navLine = document.getElementById('navLine')
        const sideBarId = document.getElementById('sideBarId')
        navLine.style.display = "none"
        navCrose.style.display = "block"
        sideBarId.style.display = "block"
    }
    const navCroseFun = () => {
        const navCrose = document.getElementById('navCrose')
        const navLine = document.getElementById('navLine')
        const sideBarId = document.getElementById('sideBarId')
        navCrose.style.display = "none"
        navLine.style.display = "block"
        sideBarId.style.display = "none"
    }

    useEffect(() => {
        getFun()
    }, [])
    const getFun = async () => {
        let result = await fetch('https://blogs-site-f4ki.onrender.com', {
            method: 'get',
            headers: { 'content-type': 'application/json' },

        })
        result = await result.json()
        setHeaderval(result)
        setVal(result)

        //newarr

        const uniqueArray = result.reduce((accumulator, current) => {
            const duplicate = accumulator.find(item => item.topic === current.topic);
            if (!duplicate) {
                return [...accumulator, current];
            }
            return accumulator;
        }, []);

        setnewarr(uniqueArray)

    }
    const searchFun = async (e) => {
        const key = e.target.value;
        let result = await fetch(`https://blogs-site-f4ki.onrender.com/search/${key}`, {
            method: 'get',
            headers: { 'content-type': 'application/json' }

        })
        result = await result.json()
        setVal(result)
    }

    return (<>
        <div className="secondDiv">
            <div>
                <ViewHeadlineIcon id='navLine' onClick={navLineFun} />
                <CloseIcon id='navCrose' onClick={navCroseFun} />
            </div>
            {newArr && newArr.map((value) => {
                return (<>


                    <p className='paraTopic'>{value.topic}</p>

                </>)

            })}
            <input type="text" placeholder='Search...' className='search-input' onChange={searchFun} />
        </div>
        <div className="mainhomeandside">
            <div className="sideBar" id='sideBarId'>
                {
                    headerval && headerval.map((value) => {
                        return (
                            <Link to={`/header/${value._id}`} className='inner2Div' key={value._id}>

                                <p>{value.header}</p>

                            </Link>
                        )
                    })
                }
            </div>
           



                <div className='homeDiv' >

                    {
                        val && val.map((value) => {
                            return (
                                <Link to={`/header/${value._id}`} className='inner2Div' key={value._id}>
                                    <div className='innerDiv' key={value._id}  id='innerDivId'>

                                        <h1>{value.header}</h1>
                                        <p className='homePara'>{value.content}</p>

                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
           
        </div>

    </>
    )
}


export default Home