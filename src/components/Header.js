import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser,removeUser } from '../utils/userSlice'
import { LOGO_URL } from '../utils/constants'


const Header = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);   


  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch(() => navigate("/error"));
  };
   useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL}))
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/");
      }
    });
    return () =>unsubscribe()
  }, [])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-44'
        src={LOGO_URL}
        alt="logo"
      />

      {user && (
        <div className="flex p-2 items-center">
          <img
            alt="usericon"
            className='w-12 h-12 rounded-md'
            src={user.photoURL}
          />
          <button
            onClick={handleSignOut}
            className='text-white font-bold ml-3'
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
