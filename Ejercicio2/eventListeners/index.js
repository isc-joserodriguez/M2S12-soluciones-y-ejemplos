import { signup, login, getInfo, updateUser, deleteUser } from '../peticiones/usuarios.js';

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

export const userData = e => {
    if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Editar Usuario') {
        updateUser();
    } else if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Eliminar Usuario') {
        deleteUser();
    }
}