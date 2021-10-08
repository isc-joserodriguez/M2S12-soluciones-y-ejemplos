const API_URI = 'https://todo-app-bs.herokuapp.com/v1';

const tasksList = document.getElementById('tasksList');

tasksList.addEventListener('click', e => {
    console.log(e.target.tagName)
    console.log(e.target.textContent)
    console.log(e.target.parentNode.getAttribute('id'));
})


export const loadTasks = async () => {
    try {
        const respuesta = await axios.get(API_URI + '/task', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        let tasks = respuesta.data.detail;
        let list = '';
        tasks.forEach(task => (
            list += `<li id="${task._id}">
        ${task.title} - ${task.description}
        <button>editar</button>
        <button>eliminar</button>
        </li>
        `
        ))
        tasksList.innerHTML = list;

    } catch (e) {
        console.log(e);
    }
}