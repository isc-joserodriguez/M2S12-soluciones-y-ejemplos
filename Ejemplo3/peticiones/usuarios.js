const API_URI = 'https://todo-app-bs.herokuapp.com/v1';
export const signup = async (data) => {
    try {
        const respuesta = await axios.post(API_URI + '/user/signup', data);
        localStorage.setItem('token', respuesta.data.detail.token);
    } catch (e) {
        console.log(e)
    }
}

export const login = async (data) => {
    try {
        const respuesta = await axios.post(API_URI + '/user/login', data);
        localStorage.setItem('token', respuesta.data.detail.token);
    } catch (e) {
        console.log(e)
    }
}

export const getInfo = async () => {
    try {
        const respuesta = await axios.get(API_URI + '/user', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        console.log(respuesta.data.detail)
    } catch (e) {
        console.log(e);
    }
}