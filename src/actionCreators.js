const authenticate = (user, auth) => {
    return {
        type: 'AUTHENTICATE',
        user,
        auth
    }
}

export {
    authenticate
}