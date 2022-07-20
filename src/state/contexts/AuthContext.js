import { createContext, useReducer, useState } from "react";
import authReducer, { initialState } from "../reducers/AuthReducer";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(authReducer, initialState)
    const [ authSuccess, setAuthSuccess ] = useState(false)

    // sign up user
    const signUp = (email, password) => {
        setAuthSuccess(true)
        // creating the account for user
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const { user } = userCredential
            if(auth.currentUser) {
                setAuthSuccess(false)
                // setSuccess(true)
                updateProfile(auth.currentUser, {
                    displayName: 'Precious'
                })

                // calling the verification email function
                sendVerificationEmail()
                console.log(user)
                // return user, 'success'

            }
            
        }).catch((err) => {
            if(err.code == 'auth/invalid-email') {
                // raising the error modal
                // this.raiseError('Email', 'Email is invalid')
                console.log('Email is invalid')

            } else if (err.code == 'auth/network-request-failed') {
                // raising the error modal
                // this.raiseError('Internet', 'Please check your internet connection')
                console.log('Please check your internet connection');

            } else if (err.code == 'auth/email-already-in-use') {
                // raising the error modal
                // this.raiseError('Email', 'Email already exists')
                console.log('Email already exists');

            } else {
                console.log(err.code, '=>', err.message)

            }
        })
         
    }

    // verify user email
    const sendVerificationEmail = () => {
        const actionCodeSettings = {
            url: 'http://localhost:3000/dashboard',
            handleCodeInApp: true   
        };

        sendEmailVerification(auth.currentUser, actionCodeSettings)
        .then(() => {
            // Email verification sent!
            console.log('email verification success')
            // ...
        }).catch((err) => {
            console.log('email verification no go', err)
        });
    }

    // sign in user
    const signIn = (email, password) => {
        console.log('signing in....', email, password)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('done');
            // Signed in 
            const user = userCredential.user;
            // updateProfile(auth.currentUser, {
            //     displayName: 'Precious'
            // })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }


    const authStates = {
        state,
        signUp,
        authSuccess,
        signIn
    }

    return ( 
        <AuthContext.Provider value={authStates}>
            {children}
        </AuthContext.Provider>
    );
}
 
export default AuthProvider;