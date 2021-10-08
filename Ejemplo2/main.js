const API_URI = 'https://todo-app-bs.herokuapp.com/v1';
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const getInfoButton = document.getElementById('getInfoButton');

signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);
    signup(dataObject);
})

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);
    login(dataObject);
});

getInfoButton.addEventListener('click', e => {
    getInfo();
})


const signup = async (data) => {
    try {
        const respuesta = await axios.post(API_URI + '/user/signup', data);
        localStorage.setItem('token', respuesta.data.detail.token);
    } catch (e) {
        console.log(e)
    }
}

const login = async (data) => {
    try {
        const respuesta = await axios.post(API_URI + '/user/login', data);
        localStorage.setItem('token', respuesta.data.detail.token);
    } catch (e) {
        console.log(e)
    }
}

const getInfo = async () => {
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