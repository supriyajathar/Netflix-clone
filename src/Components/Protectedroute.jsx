import React from 'react'
import { useAuth } from '../Context/Authcontext'
import { Navigate } from 'react-router-dom';

const Protectedroute = ({children}) => {
    const {user}=useAuth();
    if(!user)
    {
        return<Navigate to ="/"></Navigate>}
        return children;

    

 
};

export default Protectedroute
