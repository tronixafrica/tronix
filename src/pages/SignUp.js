import { useContext, useReducer, useState } from "react";
import { ACTIONS } from "../state/actions/authActions";
import { AuthContext } from "../state/contexts/AuthContext";
import authReducer from "../state/reducers/AuthReducer";

const SignUp = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const  { state, signUp, authSuccess, signIn } = useContext(AuthContext)


    const handleSignUp = () => {
        console.log(email, password)
        console.log(state)
        signUp(email, password)

    }

    const handleSignIn = () => {
        signIn(email, password)
    }
    
    return ( 
        <div className="flex flex-col space-y-5 items-center justify-center h-[100vh]">
            {state.username} account
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='bg-gray-500 text-white'/>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className='text-white bg-gray-500'/>
            {authSuccess && 'signing...' }
            <button className="bg-blue-900 text-white px-6 py-3" onClick={handleSignUp}>Sign up</button>
            <button className="bg-blue-900 text-white px-6 py-3" onClick={handleSignIn}>Sign in</button>
        </div>
    );
}
 
export default SignUp;