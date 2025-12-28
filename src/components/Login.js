import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f86b16bf-4c16-411c-8357-22d79beed09c/web/IN-en-20251222-TRIFECTA-perspective_d4acb127-f63f-4a98-ad0b-4317b0b3e500_small.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className='font-bold text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm &&
          <input
            type="text"
            placeholder="Full Name"
            className='p-4 my-4 w-full bg-gray-700'

          />
        }
        <input
          type="text"
          placeholder="Email Address"
          className='p-4 my-4 w-full bg-gray-700 '

        />
        <input
          type="password"
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-700'
        />
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-4 ' onClick={handleSignInForm}>

          {isSignInForm ? "New to Netflix?Sign Up Now" : "Already registered?Sign In Now."}
        </p>
      </form>
    </div>
  )
}

export default Login;