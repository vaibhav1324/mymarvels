import {Action} from 'redux';

const initialState = {
    name: '',
    email: '',
    password: '',
    id: '',
};

const Auth = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default Auth;
