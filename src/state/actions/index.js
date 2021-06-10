export const logIn = (token) => {
    return {
        type: 'LOG_IN',
        token,
    }
}
export const addRestaurant = (restaurant) => {
    return {
        type: 'ADD_RESTAURANT',
        restaurant,
    }
}
export const editRestaurant = (restaurant,id) => {
    return {
        type: 'EDIT_RESTAURANT',
        id,
        restaurant,
    }
}
export const addMenuPos = (restaurantId,menuPos) => {
    return {
        type: 'ADD_POS',
        restaurantId,
        menuPos,
    }
}
export const deleteMenuPos = (restaurantId,positionId) => {
    return {
        type: 'DELETE_POS',
        restaurantId,
        positionId,
    }
}
