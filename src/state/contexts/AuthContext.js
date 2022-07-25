import { createContext, useReducer, useState } from "react";
import authReducer, { initialState } from "../reducers/AuthReducer";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { getDatabase, ref, set } from "firebase/database";
import { db } from '../../firebase/firebase'
import { ACTIONS } from "../actions/authActions";
import UserAccountProfileReducer, { initialProfileState } from "../reducers/UserAccountProfileReducer";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(authReducer, initialState)
    const [ profileState, dispatchProfileState ] = useReducer(UserAccountProfileReducer, initialProfileState)
    const [ authSuccess, setAuthSuccess ] = useState(false)
    const [ error, setError ] = useState({
        isError: false,
        errorMsg: ''
    })


    // sign up user
    const signUp = (email, password) => {

        // if error state is false: do not update error state
        if(error.isError) {
            setError(prevState => {
                return { ...prevState, isError: false, errorMsg: ''}
            })
        }

        // updating the authSuccess state
        setAuthSuccess(prevState => prevState = !prevState)

        // creating the account for user
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const { user } = userCredential
            console.log(user.uid, 'user id')

            if(auth.currentUser) {
                // updating the auth success: if signup is successfull
                setAuthSuccess(prevState => prevState = !prevState)

                // calling the verification email function
                sendVerificationEmail()
                console.log(user)

            }
            
        }).catch((err) => {
            if(err.code == 'auth/invalid-email') {
                errorFunc('Email is invalid')
                console.log('Email is invalid')

            } else if (err.code == 'auth/network-request-failed') {
                errorFunc('Please check your internet connection')
                console.log('Please check your internet connection');

            } else if (err.code == 'auth/email-already-in-use') {
                errorFunc('Email already exists')
                console.log('Email already exists');
                
            } else if (err.code == 'auth/weak-password') {
                errorFunc('Password should be at least 6 characters ')

            } else {
                console.log(err.code, '=>', err.message, 'something went wrong')
                errorFunc('Something went wrong')
            }
        })
         
    }

    // verify user email
    const sendVerificationEmail = () => {

        // continue url for email verified
        const actionCodeSettings = {
            url: 'http://localhost:3000/dashboard',
            handleCodeInApp: true   
        };

        // sending the verification email with firebase
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
        // if error state is false: do not update error state
        if(error.isError) {
            setError(prevState => {
                return { ...prevState, isError: false, errorMsg: ''}
            })
        }

        // updating the authSuccess state
        setAuthSuccess(prevState => prevState = !prevState)

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user.uid)

            // update auth success state: if sign in is successfull
            setAuthSuccess(prevState => prevState = !prevState)

            // updating the user account state with the current email
            dispatch({
                type: ACTIONS.UPDATE_USER_ACCOUNT_EMAIL_USERID,
                payload: { 
                    email: email,
                    userId: user.uid 
                }
            })

        })
        .catch((error) => {
            if (error.code === 'auth/wrong-password') {
                errorFunc('Wrong password')

            } else if (error.code === 'auth/user-not-found') {
                errorFunc('Email does not exist')
                
            } else if (error.code === 'auth/invalid-email') {
                errorFunc('Email is Invalid')
            } else if (error.code === 'auth/network-request-failed') {
                errorFunc('Please check your internet connection')
            } else {
                errorFunc('ooopppss something went wrong')
            }

            console.log(error.code, 'error message')
        });

        console.log(state, 'this is the updated state')

    }

    // create user account profile
    const createAccount = (email, userId) => {
        const profileAccount = {
            device: {
                qty: 0,
                proxie: null,
                airsyn: null
            },
            account: {
                userId: userId,
                email: email
            }
        }

        
        console.log(email, userId, 'creating the account');
        set(ref(db, 'users/' + userId), profileAccount);
    }

    // error function for auth 
    const errorFunc = (msg) => {
        // changing the auth state
        setAuthSuccess(prevState => prevState = !prevState)
        
        // changing the error state
        setError(prevState => {
            return { ...prevState, isError: true, errorMsg: msg }
        })
    }


    const authStates = {
        state,
        signUp,
        authSuccess,
        signIn,
        error,
        createAccount
    }

    return ( 
        <AuthContext.Provider value={authStates}>
            {children}
        </AuthContext.Provider>
    );
}
 
export default AuthProvider;