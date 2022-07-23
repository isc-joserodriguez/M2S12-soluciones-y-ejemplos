import { signup, login, getInfo, updateUser, deleteUser } from '../peticiones/usuarios.js';
import { updateTask, deleteTask } from '../peticiones/tareas.js';

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

export const taskData = e => {
    if (e.target.textContent === 'editar' && e.target.tagName === 'BUTTON') {
        updateTask(e.target.parentNode.getAttribute('id'));
    } else if (e.target.textContent === 'eliminar' && e.target.tagName === 'BUTTON') {
        deleteTask(e.target.parentNode.getAttribute('id'));
    }
}