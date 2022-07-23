import { signupEvent, loginEvent, infoEvent } from './eventListeners/index.js';
import { loadTasks } from './peticiones/tareas.js';
import { userData, taskData } from './eventListeners/index.js'

const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const getInfoButton = document.getElementById('getInfoButton');
const getTasksButton = document.getElementById('getTasksButton');
const btnUser = document.getElementById('btnUser');
const tasksList = document.getElementById('tasksList');

signupForm.addEventListener('submit', signupEvent);

loginForm.addEventListener('submit', loginEvent);

getInfoButton.addEventListener('click', infoEvent);

getTasksButton.addEventListener('click', loadTasks);

btnUser.addEventListener('click', userData);

tasksList.addEventListener('click', taskData)



window.onload = loadTasks();