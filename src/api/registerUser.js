export async function registerUser(data) {
    const requestData = JSON.stringify(data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const init = {
        method: 'POST',
        headers: headers,
        body: requestData,
    }
    const url = `${process.env.REACT_APP_API_URL}/users`;
    const response = await fetch(url, init);
    if (response.ok){
        return await response.json();
    }else if (response.status >= 500) {
        throw new Error(`There was an server error (status: ${response.status}). Try again later!`)
    }else if (response.status >= 400){
        throw new Error(`Something went wrong! There was a client-side error. Status code: ${response.status}. `)
    };
}