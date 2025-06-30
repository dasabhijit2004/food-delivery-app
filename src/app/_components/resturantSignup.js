import React from 'react'

const UserSignup = () => {
  return (
    <>
      <form className="form">
        <h2>Resturant Sign Up</h2>
        <div className="input-wrapper">
          <label htmlFor="name" className="label">Name:</label>
          <input type="name" id="name" name="name" required className="input-field" />
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
          <label htmlFor="password" className="label">Confirm Password:</label>
          <input type="password" id="confirm-password" name="password" required className="input-field" />
        </div>
        <button type="submit" className="button">Sign Up</button>
      </form>
    </>
  )
}

export default UserSignup