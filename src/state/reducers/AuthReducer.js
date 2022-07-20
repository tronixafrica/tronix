import { ACTIONS } from "../actions/authActions"


export const initialState = {
    username: 'james'
}

const authReducer = (state, action) => {
    const { email, password } = action.payload

    switch(action.type) {
        case ACTIONS.SIGNUP:
            // return { username: state.username = 'precious' }
            return state
        case ACTIONS.LOGIN:
            console.log('login ')
            return

        case ACTIONS.VERIFY_EMAIL:
            console.log('VERFIY EMAIL');
            return

        default:
            console.log('this is the default state')
    }
}

export default authReducer