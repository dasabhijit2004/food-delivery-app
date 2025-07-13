'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import './globals.css';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="home h-screen w-full">
      <div className="h-screen w-full bg-black/50 flex flex-col items-center justify-center text-center text-white gap-10">
        <h1>Welcome to <span className="text-green-500">FoodieExpress</span></h1>
        <p className="text-lg text-white">Try out the best dishes in the town.</p>
        <div className='resturant-login'>
          {isLoggedIn ? (
            <Link
              href="/resturant"
              className='bg-green-500 text-white text-xl font-bold px-4 py-2 rounded-xl hover:bg-green-600 transition-colors duration-300'
            >
              Go to Restaurant Homepage
            </Link>
          ) : (
            <Link
              href="/resturant/auth"
              className='bg-green-500 text-white text-xl font-bold px-4 py-2 rounded-xl hover:bg-green-600 transition-colors duration-300'
            >
              Login as Restaurant
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
