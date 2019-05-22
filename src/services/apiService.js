const ROOT = 'https://localhost:44338/api';

const standartHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + sessionStorage.tokenKey
};

export const requests = {
    
    doPost: async function (path, body) {
        const response = await fetch(ROOT + path,
            {
                method: 'POST',
                mode: 'cors',
                headers: (body.values===undefined)?standartHeaders: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + sessionStorage.tokenKey
                },
                body: body
            }
        )
        return response.json();
    },

    doGet: async function (path) {
        const response = await fetch(ROOT + path,
            {
                method: 'GET',
                mode: 'cors',
                headers: standartHeaders
            }
        )
        return response.json();
    },
}