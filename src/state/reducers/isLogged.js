const isLoggedReducer = (state = {
    isLogged: false,
    userToken: '',
}, action) => {
    switch(action.type){
        case 'LOG_IN':
            return {
                isLogged: true,
                userToken: action.token,
            };
        default:
            return state;
    }
};
export default isLoggedReducer;