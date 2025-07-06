import React, { useState } from 'react'

const ResturantSignup = () => {
  const [name, setName] = React.useState('')
  const [number, setNumber] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [c_password, setC_password] = React.useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, number, address, email, password, c_password)
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
    result = await result.json()
    console.log(result)
    if (result.error) {
      alert(result.error)
    } else {
      alert('Resturant registered successfully')
      setName('')
      setNumber('')
      setAddress('')
      setEmail('')
      setPassword('')
      setC_password('')
    }
  }

  return (
    <>
      <form className="form">
        <div className="input-wrapper">
          <label htmlFor="name" className="label">Resturant Name:</label>
          <input type="text" id="name" name="name" required className="input-field" onChange={(event)=>{setName(event.target.value)}}/>
        </div>

        <div className="input-wrapper">
          <label htmlFor="number" className="label">Contact No.:</label>
          <input type="text" id="number" name="number" required className="input-field" onChange={(event)=>{setNumber(event.target.value)}}/>
        </div>

        <div className="input-wrapper">
          <label htmlFor="address" className="label">Address:</label>
          <input type="text" id="address" name="address" required className="input-field" onChange={(event)=>{setAddress(event.target.value)}}/>
        </div>

        <div className="input-wrapper">
          <label htmlFor="email" className="label">Email:</label>
          <input type="email" id="email" name="email" required className="input-field" onChange={(event)=>{setEmail(event.target.value)}}/>
        </div>

        <div className="input-wrapper">
          <label htmlFor="password" className="label">Password:</label>
          <input type="password" id="password" name="password" required className="input-field" onChange={(event)=>{setPassword(event.target.value)}}/>
        </div>

        <div className="input-wrapper">
          <label htmlFor="confirm-password" className="label">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" required className="input-field" onChange={(event)=>{setC_password(event.target.value)}}/>
        </div>
        <button type="submit" className="button" onClick={handleSubmit}>Sign Up</button>
      </form>
    </>
  )
}

export default ResturantSignup