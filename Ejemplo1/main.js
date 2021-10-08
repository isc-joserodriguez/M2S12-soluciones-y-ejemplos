const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');
const getInfoButton = document.getElementById('getInfoButton');

signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);
    console.log(dataObject);
})

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);
    console.log(dataObject);
});

getInfoButton.addEventListener('click', e => {
 console.log('info')
})