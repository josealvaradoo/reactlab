import { createStore }  from 'redux';

const reducer = (state, action) => {
    switch(action.type) {
        case 'AUTHENTICATE':
            console.log('Autenticado: ' + action.user);
            return {
                ...state,
                user: action.user,
                auth: action.auth
            }
        default:
            return state;
    }
}

export default createStore(reducer, {courses: [], user: {}, auth: false});