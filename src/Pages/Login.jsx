import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useAuth} from '../Context/Authcontext';

const Login = () => {
  const [rememberLogin, setRememberLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user,LogIn}=useAuth();
  const navigate=useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
   
   try{
    await LogIn(email, password);
    navigate("/");

    
   }
   catch (err) {
    console.log( err);
  }
  
  };

  return (
    <>
      <div className='h-screen w-full'>
        <div>
          <img className="hidden sm:block absolute h-full w-full object-cover" src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg' alt="background" />
        </div>
        <div className='bg-black/70 fixed top-0 left-0 w-full h-screen' />
        <div className="fixed w-full px-4 py-24 z-20">
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-nsans-bold'>
                Login
              </h1>
              <form onSubmit={handleFormSubmit} className='w-full flex flex-col py-4'>

                <input className='bg-gray-700 p-3 my-2 rounded' type='email' placeholder='Email'
                  autoComplete='email' value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input className='bg-gray-700 p-3 my-2 rounded' type='password' placeholder='Password'
                  autoComplete='current-password' value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className='p-3 my-2 bg-red-700 rounded'>
                  <span>Log in</span>
                </button>

                <p className='p-3 ml-20 hover:underline hover:text-gray-600'>Forgot Password</p>

                <div className='flex justify-between text-gray-600'>
                  <p>
                    <input type="checkbox" className='mr-2' checked={rememberLogin} onChange={(e) => setRememberLogin(!rememberLogin)} />
                    Remember me
                  </p>

                  <p>
                    Need help?
                  </p>
                </div>

                <p className='p-3'>
                  <span className='text-gray-600'>Not yet registered?</span>
                  <Link to="/signup" className='ml-2 py-4'>Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../Context/Authcontext';

// const Login = () => {
//   const [rememberLogin, setRememberLogin] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { LogIn } = useAuth();
//   const navigate = useNavigate();

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       await LogIn(email, password);
//       navigate("/"); // Redirect to the home page after successful login
//     } catch (err) {
//       console.log(err);
//     }
//   };


//   return (
//     <>
//       <div className='h-screen w-full'>
//         <div>
//           <img className="hidden sm:block absolute h-full w-full object-cover" src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg' alt="background" />
//         </div>
//         <div className='bg-black/70 fixed top-0 left-0 w-full h-screen' />
//         <div className="fixed w-full px-4 py-24 z-20">
//           <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg'>
//             <div className='max-w-[320px] mx-auto py-16'>
//               <h1 className='text-3xl font-nsans-bold'>
//                 Login
//               </h1>
//               <form onSubmit={handleFormSubmit} className='w-full flex flex-col py-4'>
//                 <input className='bg-gray-700 p-3 my-2 rounded' type='email' placeholder='Email'
//                   autoComplete='email' value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input className='bg-gray-700 p-3 my-2 rounded' type='password' placeholder='Password'
//                   autoComplete='current-password' value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button  type="submit" className='p-3 my-2 bg-red-700 rounded'>
//                   <span>Log in</span>
//                 </button>
//                 <p className='p-3 ml-20 hover:underline hover:text-gray-600'>Forgot Password</p>
//                 <div className='flex justify-between text-gray-600'>
//                   <p>
//                     <input type="checkbox" className='mr-2' checked={rememberLogin} onChange={(e) => setRememberLogin(!rememberLogin)} />
//                     Remember me
//                   </p>
//                   <p>
//                     Need help?
//                   </p>
//                 </div>
//                 <p className='p-3'>
//                   <span className='text-gray-600'>Not yet registered?</span>
//                   <Link to="/signup" className='ml-2 py-4'>Sign Up</Link>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../Context/Authcontext';

// const Login = () => {
//   const [rememberLogin, setRememberLogin] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginError, setLoginError] = useState('');
//   const { LogIn } = useAuth();
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await LogIn(email, password);
//       setLoggedIn(true); // Set loggedIn to true upon successful login
//     } catch (err) {
//       setLoginError(err.message); // Set loginError state if login fails
//     }
//   };

//   if (loggedIn) {
//     return <Redirect to="/" />; // Redirect to home page if logged in
//   }

//   return (
//     <>
//       <div className='h-screen w-full'>
//         {/* Your existing UI code */}
//         <form onSubmit={handleFormSubmit} className='w-full flex flex-col py-4'>
//           {/* Your existing form inputs */}
//           <button type="submit" className='p-3 my-2 bg-red-700 rounded'>
//             <span>Log in</span>
//           </button>
//         </form>
//         {/* Your existing UI code */}
//       </div>
//     </>
//   );
// };

// export default Login;



