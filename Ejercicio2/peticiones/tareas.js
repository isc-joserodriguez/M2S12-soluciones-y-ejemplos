const API_URI = 'https://todo-app-bs.herokuapp.com/v1';
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

export const updateTask = async (id) => {
    let title = prompt('Nueva tarea');
    let description = prompt('Nueva descripción');
    try {
        const respuesta = await axios.put(API_URI + '/task/' + id, { title, description }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        alert('Tarea actualizada');
        loadTasks();
    } catch (e) {
        console.log(e);
    }
}


export const deleteTask = async (id) => {
    try {
        const respuesta = await axios.delete(API_URI + '/task/' + id, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        alert('Tarea eliminada');
        loadTasks();
    } catch (e) {
        console.log(e);
    }
}