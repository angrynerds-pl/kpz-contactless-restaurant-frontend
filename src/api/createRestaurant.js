import { handleResponse } from './handleResponse';

export async function createRestaurant(restaurant) {
    const requestData = JSON.stringify(restaurant);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const init = {
        method: 'POST',
        headers: headers,
        body: requestData,
    }
    const url = `${process.env.REACT_APP_API_URL}/users/restaurants/`;
    const response = await fetch(url, init);
    return await handleResponse(response);
}