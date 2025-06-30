import React from 'react'

const ResturantLogin = () => {
  return (
    <>
      <form className="form">
        <div className="input-wrapper">
          <label htmlFor="email" className="label">Email:</label>
          <input type="email" id="email" name="email" required className="input-field" />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password" className="label">Password:</label>
          <input type="password" id="password" name="password" required className="input-field" />
        </div>

        <button type="submit" className="button">Login</button>
        <button type="button" className="link-button">Forgot Password?</button>
      </form>
    </>
  )
}

export default ResturantLogin