import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/Firebase.config';

export const AuthContext = createContext(null)

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign In user
    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
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
        signInUser
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