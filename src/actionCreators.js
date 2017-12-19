const authenticate = (user, token) => {
    return {
        type: 'AUTHENTICATE',
        user,
        token
    }
}

const closeSession = () => {
    return {
        type: 'CLOSE_SESSION'
    }
}

export {
    authenticate,
    closeSession
}