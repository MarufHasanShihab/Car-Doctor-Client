import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from './../Config/firebase.config';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    };

    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }


    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
        })
        return()=>{
            return unSubscribed();
        }
    },[])
    

    const authInfo = {user, createUser,loginUser}
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