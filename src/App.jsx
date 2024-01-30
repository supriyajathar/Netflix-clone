import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/profile'
import Signup from './Pages/Signup'
import Navbar from './Components/Navbar'

import { AuthContextProvider } from "./Context/Authcontext"
import Protectedroute from './Components/Protectedroute'

const App = () => {
  return (
  
    <>
   
    <AuthContextProvider>

    <Navbar/>
   

   <Routes>
 
   
   <Route path="/" element={<Home></Home>}></Route>
   <Route path="/Login" element={<Login></Login>}></Route>
   <Route path="/signup" element={<Signup></Signup>}></Route>
   <Route path="/Profile" element={<Protectedroute><Profile></Profile></Protectedroute>}></Route>
   </Routes>
   </AuthContextProvider>

    
    </>
 
  )
}

export default App



