const authenticate = (state, action) => {
    return {
        ...state,
        user: action.user,
        auth: action.auth,
        token: action.token
    }
}

export default authenticate;