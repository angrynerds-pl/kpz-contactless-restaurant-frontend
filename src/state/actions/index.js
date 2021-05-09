export const logIn = (token) => {
    return {
        type: 'LOG_IN',
        token: token,
    }
}