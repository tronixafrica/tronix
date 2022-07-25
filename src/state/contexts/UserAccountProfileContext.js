import { createContext } from "react";


const UserAccountProfile = createContext()

const UserAccountProfileProvider = ({children}) => {

    const getUserAccountProfile = (userId) => {
        console.log(userId, 'the user id')
    }

    return (
        <UserAccountProfile.Provider>
            {children}
        </UserAccountProfile.Provider>
    )
}