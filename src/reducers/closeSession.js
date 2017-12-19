const closeSession = (state, action) => {
    localStorage.removeItem('token');
    return {
        ...state,
        user: {},
        token: null
    }
}

export default closeSession;