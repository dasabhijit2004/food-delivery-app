"use client"
import React from 'react'
import UserLogin from '../_components/resturantLogin';
import UserSignup from '../_components/resturantSignup';

const Resturant = () => {
    const [login, setLogin] = React.useState(true);
    return (
        <div className='resturant-container'>
            {
                login ? <UserLogin /> : <UserSignup />
            }
            <div className='outer'>
                <p className='text-center'>
                    {login ? "Don't have an account?" : "Already have an account?"}
                </p>
                <button onClick={() => setLogin(!login)} className='link-button'>
                    {login ? "Sign Up" : "Login"}
                </button>
            </div>
        </div>

    )
}

export default Resturant