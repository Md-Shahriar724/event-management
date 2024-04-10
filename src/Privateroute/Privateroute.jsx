import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {Navigate, useLocation} from 'react-router-dom'


const Privateroute = ({children}) => {

    const {users, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname )

    console.log(users)
    if(loading){
        return  <div className="flex flex-col gap-4 w-52 mx-auto my-40">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    }
    if(users){
        return children;
    }
    else{
        return <Navigate state={location.pathname} to={'/signIn'}></Navigate>
    }
   
};

export default Privateroute;