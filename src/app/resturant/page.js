'use client'

import React, { useEffect, useState } from 'react';
import ResturantHeader from '../_components/ResturantHeader';
import './style.css';
import Footer from '../_components/Footer';

const ResturantHome = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchName = async () => {
            try {
                const email = localStorage.getItem('email');
                if (!email) {
                    console.log("No email found in localStorage");
                    return;
                }

                const response = await fetch('http://localhost:3000/api/resturant/profile', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email }),
                });

                if (response.ok) {
                    const data = await response.json();
                    setName(data.user.name);
                } else {
                    console.log('Failed to fetch user data');
                }
            } catch (error) {
                console.log('Error fetching name', error);
            }
        };

        fetchName();
    }, []);

    return (
        <>
            <ResturantHeader />
            <div className='min-h-screen w-full flex flex-col items-center py-20'>
                <h1>Welcome <span className='text-green-500'>{name || '...'}</span></h1>
                <p>Create the dishes and spread happiness</p>
            </div>
            <Footer />
        </>
    );
};

export default ResturantHome;
