import { createStore }  from 'redux';

const reducer = (state, action) => {
    switch(action.type) {
        case 'AUTHENTICATE':
            console.log('Autenticado: ' + action.user);
            return {
                ...state,
                user: action.user,
                authenticate: action.authenticate
            }
        default:
            return state;
    }
}

export default createStore(reducer, {courses: [], user: {}, authenticate: false});