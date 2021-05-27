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
export const addMenuPos = (restaurantId,menuPos) => {
    return {
        type: 'ADD_POS',
        restaurantId: restaurantId,
        menuPos: menuPos,
    }
}
export const deleteMenuPos = (restaurantId,positionId) => {
    return {
        type: 'DELETE_POS',
        restaurantId: restaurantId,
        positionId: positionId,
    }
}