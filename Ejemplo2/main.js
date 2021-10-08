
import { signupEvent, loginEvent, infoEvent } from './eventListeners/index.js';

const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const getInfoButton = document.getElementById('getInfoButton');

signupForm.addEventListener('submit', signupEvent);

loginForm.addEventListener('submit', loginEvent);

getInfoButton.addEventListener('click', infoEvent);