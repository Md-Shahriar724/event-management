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

    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)

// signUp with Email, password
const SignUpWithEmailPass =(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

// google Sign in

const googleLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)

}

// github sign in

const githubLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
}
    
// sign in With email and password

const emailPassLogin =(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
    
}

// manageing  users 

useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUsers(currentUser)
        console.log(users)
        setLoading(false)
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
        users,
        loading
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