const closeSession = (state, action) => {
    return {
        ...state,
        user: {},
        auth: false,
        token: null
    }
}

export default closeSession;