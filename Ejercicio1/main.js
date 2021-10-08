import { signupEvent, loginEvent, infoEvent } from './eventListeners/index.js';
import { loadTasks } from './peticiones/tareas.js';

const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const getInfoButton = document.getElementById('getInfoButton');
const getTasksButton = document.getElementById('getTasksButton');

signupForm.addEventListener('submit', signupEvent);

loginForm.addEventListener('submit', loginEvent);

getInfoButton.addEventListener('click', infoEvent);

getTasksButton.addEventListener('click', loadTasks);



window.onload = loadTasks();