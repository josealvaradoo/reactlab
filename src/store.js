import { createStore }  from 'redux';
import { AUTHENTICATE, CLOSE_SESSION } from './actions/actions';
import authenthicate from './reducers/authenticate';
import closeSession from './reducers/closeSession';

const reducer = (state, action) => {
    switch(action.type) {
        case AUTHENTICATE:
            return authenthicate(state, action);
        case CLOSE_SESSION:
            return closeSession(state, action);
        default:
            return state;
    }
}

export default createStore(reducer, {courses: [], user: {}, auth: false, token: null});