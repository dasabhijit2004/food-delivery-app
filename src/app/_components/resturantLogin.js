'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const ResturantLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('/api/resturant/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save user info
        localStorage.setItem('name', data.user.name);
        localStorage.setItem('email', data.user.email);
        // If you have token later, uncomment below
        localStorage.setItem('token', data.token);

        toast.success('Login successful! Redirecting...', {
          position: 'top-right',
          autoClose: 1500,
          onClose: () => router.push('/resturant'), // Redirect after toast
        });
      } else {
        toast.error(data.error || data.message || 'Invalid email or password');
      }
    } catch (err) {
      console.error('Login error:', err);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email" className="label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-wrapper password-wrapper">
          <label htmlFor="password" className="label">Password:</label>
          <div className='password-field'>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              required
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>
        </div>

        <button type="submit" className="button">Login</button>
        <button type="button" className="link-button">Forgot Password?</button>
      </form>

      <ToastContainer />
    </>
  );
};

export default ResturantLogin;
