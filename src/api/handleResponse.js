export async function handleResponse (response){
    if (response.ok){
        return await response.json();
    }else if (response.status >= 500) {
        throw new Error(`There was an server error (status: ${response.status}). Try again later!`)
    }else if (response.status >= 400){
        throw new Error(`Something went wrong! There was a client-side error. Status code: ${response.status}. `)
    };
}