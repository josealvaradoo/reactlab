const authenticate = (state, action) => {
    return {
        ...state,
        user: action.user,
        token: action.token
    }
}

export default authenticate;