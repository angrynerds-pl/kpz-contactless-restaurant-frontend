export const logIn = (token) => {
    return {
        type: 'LOG_IN',
        token: token,
    }
}
export const addRestaurant = (restaurant) => {
    return {
        type: 'ADD_RESTAURANT',
        restaurant: restaurant,
    }
}
export const editRestaurant = (restaurant) => {
    return {
        type: 'EDIT_RESTAURANT',
        restaurant: restaurant,
    }
}
