import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';

const ResturantSignup = () => {
  const [name, setName] = React.useState('')
  const [number, setNumber] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [c_password, setC_password] = React.useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showCPassword, setShowCPassword] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !number || !address || !email || !password || !c_password) {
      toast.error("All fields are required!");
      return;
    }

    if (number.length !== 10 || isNaN(number)) {
      toast.error("Please enter a valid 10-digit contact number.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/;
    if (!strongPasswordRegex.test(password)) {
      toast.error("Create a stronger password.");
      return;
    }

    if (password !== c_password) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      let result = await fetch('http://localhost:3000/api/resturant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          number,
          address,
          email,
          password
        })
      })

      result = await result.json();
      console.log(result);

      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success('Restaurant registered successfully!');
        setName('');
        setNumber('');
        setAddress('');
        setEmail('');
        setPassword('');
        setC_password('');
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again later.");
    }
  }


  return (
    <>
      <form className="form">
        <div className="input-wrapper">
          <label htmlFor="name" className="label">Resturant Name:</label>
          <input type="text" id="name" name="name" required className="input-field" value={name} onChange={(event) => { setName(event.target.value) }} />
        </div>

        <div className="input-wrapper">
          <label htmlFor="number" className="label">Contact No.:</label>
          <input type="text" id="number" name="number" required className="input-field" value={number} onChange={(event) => { setNumber(event.target.value) }} />
        </div>

        <div className="input-wrapper">
          <label htmlFor="address" className="label">Address:</label>
          <input type="text" id="address" name="address" required className="input-field" value={address} onChange={(event) => { setAddress(event.target.value) }} />
        </div>

        <div className="input-wrapper">
          <label htmlFor="email" className="label">Email:</label>
          <input type="email" id="email" name="email" required className="input-field" value={email} onChange={(event) => { setEmail(event.target.value) }} />
        </div>

        <div className="input-wrapper password-wrapper">
          <label htmlFor="password" className="label">Password:</label>
          <div className='password-field'>
            <input type={showPassword ? 'text' : 'password'} id="password" name="password" required className="input-field password-input" value={password} onChange={(event) => { setPassword(event.target.value) }} />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>
        </div>

        <div className="input-wrapper password-wrapper">
          <label htmlFor="confirm-password" className="label">Confirm Password:</label>
          <div className='password-field'>
            <input
              type={showCPassword ? 'text' : 'password'}
              id="confirm-password"
              name="confirm-password"
              required
              className="input-field password-input"
              value={c_password}
              onChange={(event) => { setC_password(event.target.value) }}
            />
            <span
              onClick={() => setShowCPassword(!showCPassword)}
              className="password-toggle"
            >
              {showCPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>
        </div>

        <button type="submit" className="button" onClick={handleSubmit}>Sign Up</button>
      </form>
      <ToastContainer />
    </>
  )
}

export default ResturantSignup