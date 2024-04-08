import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { GithubAuthProvider,
     GoogleAuthProvider,
    createUserWithEmailAndPassword,
     onAuthStateChanged,
     signInWithEmailAndPassword, 
     signInWithPopup } from "firebase/auth";
import auth from '../Firebase/Firebase.config'


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

// signUp with Email, password
const SignUpWithEmailPass =(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}

// google Sign in

const googleLogin = ()=>{
    return signInWithPopup(auth, googleProvider)
}

// github sign in

const githubLogin = ()=>{
    return signInWithPopup(auth, githubProvider)
}
    
// sign in With email and password

const emailPassLogin =(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

// manageing  users 

useEffect(()=>{
   const unsubscribe =onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser.user)
        console.log(user)
    })
    return()=>{
        unsubscribe
    }

    
},[])


// // Sign Out here
// const signOutAct =()=>{
//    return signOut(auth)
// }

    const info ={
        googleLogin,
        githubLogin,
        emailPassLogin,
        SignUpWithEmailPass,
        user,
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes ={
    children: PropTypes.node
}