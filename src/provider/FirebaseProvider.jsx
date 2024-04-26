import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/Firebase.config';


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider;

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //update Profile
    const updateUser = (fullName,image)=>{
        return updateProfile(auth.currentUser,{
            displayName: fullName,
            photoURL: image
        })
    }

    //sign In user
    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    //google login
    const googleLogin = ()=>{
        return signInWithPopup(auth,googleProvider)
    }

    //logout
    const logout = ()=>{
        return signOut(auth)
    }

    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('observing user', currentUser)
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const allValues = {
        user,
        createUser,
        signInUser,
        googleLogin,
        logout,
        updateUser
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};
FirebaseProvider.propTypes = {
    children: PropTypes.node
}
export default FirebaseProvider;