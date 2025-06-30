import React from 'react'

const ResturantSignup = () => {
  return (
    <>
      <form className="form">
        <div className="input-wrapper">
          <label htmlFor="name" className="label">Resturant Name:</label>
          <input type="text" id="name" name="name" required className="input-field" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="number" className="label">Contact No.:</label>
          <input type="text" id="number" name="number" required className="input-field" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="address" className="label">Address:</label>
          <input type="text" id="address" name="address" required className="input-field" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="email" className="label">Email:</label>
          <input type="email" id="email" name="email" required className="input-field" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password" className="label">Password:</label>
          <input type="password" id="password" name="password" required className="input-field" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="confirm-password" className="label">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" required className="input-field" />
        </div>
        <button type="submit" className="button">Sign Up</button>
      </form>
    </>
  )
}

export default ResturantSignup