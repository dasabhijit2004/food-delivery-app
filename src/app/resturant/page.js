'use client'

import React, { useEffect, useState } from 'react'
import ResturantHeader from '../_components/ResturantHeader'
import './style.css'
import Footer from '../_components/Footer'

const ResturantHome = () => {

    const [name, setName] = useState("");
    useEffect(() => {
        const fetchName = async () => {
            try{
                const response = await fetch('/api/resturant')
                const data = await response.json()
                setName(data.name)
            }catch(error){
                console.log("Error fetching name", error)
            }
        }

        fetchName();
    },[])

    return (
        <>
            <ResturantHeader />
            <h1>Welcome <span>{name}</span></h1>
            <Footer />
        </>
    )
}

export default ResturantHome