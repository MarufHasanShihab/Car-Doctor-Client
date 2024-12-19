import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from './../Config/firebase.config';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    };

    const loginUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return()=>{
            return unSubscribed();
        }
    },[])
    

    const authInfo = {user, createUser,loginUser,signOutUser,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;