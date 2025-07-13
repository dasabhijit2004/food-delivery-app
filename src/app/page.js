'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import './globals.css';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    setIsLoggedIn(false); // Update UI
  };

  return (
    <div className="home h-screen w-full">
      <div className="h-screen w-full bg-black/50 flex flex-col items-center justify-center text-center text-white gap-6">
        <h1>Welcome to <span className="text-green-500">FoodieExpress</span></h1>
        <p className="text-lg text-white">Try out the best dishes in the town.</p>

        <div className='resturant-login flex flex-col gap-4'>
          {isLoggedIn ? (
            <>
              <Link
                href="/resturant"
                className='resturant-login-link bg-green-500 text-white text-xl font-bold px-4 py-2 rounded-xl hover:bg-green-600 transition-colors duration-300'
              >
                Go to Restaurant Homepage
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white text-xl font-bold px-4 py-2 rounded-xl hover:bg-red-600 transition-colors duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/resturant/auth" // 👈 Link to Login Page
              className='resturant-login-link bg-green-500 text-white text-xl font-bold px-4 py-2 rounded-xl hover:bg-green-600 transition-colors duration-300'
            >
              Login as Restaurant
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
