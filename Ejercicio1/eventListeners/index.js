import { signup, login, getInfo } from '../peticiones/usuarios.js';

export const signupEvent = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);
    signup(dataObject);
}

export const loginEvent = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);
    login(dataObject);
}

export const infoEvent = () => {
    getInfo();
}