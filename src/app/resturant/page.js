"use client"
import React from 'react'
import ResturantLogin from '../_components/resturantLogin';
import ResturantSignup from '../_components/resturantSignup';

const Resturant = () => {
    const [login, setLogin] = React.useState(true);
    return (
        <div className='resturant-container'>
            <div className='auth'>
            <h2>
                {login ? "Resturant Login" : "Resturant Sign Up"}
            </h2>
                {
                    login ? <ResturantLogin /> : <ResturantSignup />
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
        </div>

    )
}

export default Resturant