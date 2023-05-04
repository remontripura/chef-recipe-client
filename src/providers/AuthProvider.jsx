import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // register data from form
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }

    // login data from form
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    // login with google account
   const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
    .then(result => {
        const user = result.user;
        console.log(user)
    })
    .catch(error => {
        console.log(error)
    })
   }


   // login with github accoutn
   const githubSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
    .then(result => {
        const user = result.user;
        console.log
    })
    .catch(error => {
        console.log(error)
    })
   }

    // sign out user id
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    // observe auth state change
    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubsribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        googleSignIn,
        githubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;