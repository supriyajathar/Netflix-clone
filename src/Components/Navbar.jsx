

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useAuth} from '../Context/Authcontext'

const Navbar = () => {
  const {user, logOut}=useAuth();
  const navigate=useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  
  
  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
      <Link to="/">
        <h1 className='uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl font-bold'>Netflix</h1>
      </Link>



      {
        user?.email?(
          <div>
        <Link to="/Profile">
          <button className='capitalize pr-4'>Profile</button>
        </Link>
       
          <button onClick={handleLogout} className='capitalize bg-red-600 px-6 py-2 rounded cursor-pointer'>logOut</button>
       
      </div>
    
        ):
        (<div>
          <Link to="/Login">
            <button className='capitalize pr-4'>Login</button>
          </Link>
          <Link to="/signup">
            <button className='capitalize bg-red-600 px-6 py-2 rounded cursor-pointer'>Signup</button>
          </Link>
        </div>
        
      )
      }
   
   </div>
  )}
      
  

export default Navbar;


