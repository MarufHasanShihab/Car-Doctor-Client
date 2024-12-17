import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from './../Config/firebase.config';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }


    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
        })
        return()=>{
            return unSubscribed();
        }
    },[])
    

    const authInfo = {user, createUser}
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