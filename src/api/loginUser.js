export async function loginUser(data) {
    const requestData = JSON.stringify(data);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const init = {
        method: 'POST',
        headers: headers,
        body: requestData,
    }
    const url = `${process.env.REACT_APP_API_URL}users/login`;
    const response = await fetch(url, init);
    if(!response.ok){
        throw new Error(`HTTP Error with status: ${response.status}`);
    }
    return await response.json();
}