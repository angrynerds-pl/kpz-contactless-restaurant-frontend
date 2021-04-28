import { handleResponse } from './handleResponse';

export async function registerUser(data) {
    const requestData = JSON.stringify(data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const init = {
        method: 'POST',
        headers: headers,
        body: requestData,
    }
    const url = `${process.env.REACT_APP_API_URL}/auth/owner`;
    const response = await fetch(url, init);
    return await handleResponse(response);
}