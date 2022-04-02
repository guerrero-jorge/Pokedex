import React from 'react';
import { Navigate,Outlet } from 'react-router';
import { useSelector} from 'react-redux';

const ProtectedRoutes = () => {

    const userName=useSelector(state => state.userName)


    if(userName){ //

        return <Outlet/>

    }else{

        return <Navigate to="/"/> //si no se cumple la condicion de que haya algo diferente a vacio se lleva a login
    }
    
};

export default ProtectedRoutes;