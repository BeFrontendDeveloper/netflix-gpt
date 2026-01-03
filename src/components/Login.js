import React, { useState, useRef, } from 'react'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase"
import Header from './Header';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const dispatch=useDispatch()
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
    setErrorMessage(null);
  }
  const handleButtonClick = () => {
    //validate the form data
    //console.log(name.current.value)
    // const nameValue = isSignInForm ? "" : name.current.value;
    // console.log(email.current.value);
    // console.log(password.current.value);
    // const message = checkValidData(nameValue,email.current.value, password.current.value,isSignInForm);
    const enteredName = name.current?.value || "";   // safe read
    const enteredEmail = email.current?.value || "";
    const enteredPassword = password.current?.value || "";

    const message = checkValidData(
      enteredName,
      enteredEmail,
      enteredPassword,
      isSignInForm
    );
    setErrorMessage(message)
    if (message) return;
    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: USER_AVATAR
          }).then(() => {
              const {uid,email, displayName,photoURL}=auth.currentUser;
            dispatch(addUser({
              uid:uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL,
            }))
          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message)
          });
          console.log(user);
          //navigate("/browse")
          //  setErrorMessage("Account created successfully. Please Sign In.");
          // setIsSignInForm(true);     // 🔁 Switch user to Sign-In form

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          //navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });

    }
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f86b16bf-4c16-411c-8357-22d79beed09c/web/IN-en-20251222-TRIFECTA-perspective_d4acb127-f63f-4a98-ad0b-4317b0b3e500_small.jpg"
          alt="logo"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className='font-bold text-xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm &&
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className='p-4 my-4 w-full bg-gray-700'

          />
        }
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className='p-4 my-4 w-full bg-gray-700 '

        />
        <input
          ref={password}
          type="password"
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-700'
        />
        {/* {!isSignInForm &&errorMessage && <p className="text-red-500 font-bold">{errorMessage}</p>} */}
        {errorMessage && (
          <p className="text-red-500 font-bold">{errorMessage}</p>
        )}
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
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