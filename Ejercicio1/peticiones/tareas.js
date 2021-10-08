const tasksList = document.getElementById('tasksList');

tasksList.addEventListener('click', e => {
    console.log(e.target.tagName)
    console.log(e.target.textContent)
    console.log(e.target.parentNode.getAttribute('id'));
})

const tasks = [
    {
        _id: '7as8dnf37nd',
        title: 'Comprar leche',
        idUser: '789sdnmgd',
        description: 'Ir a la tienda por leche',
        dueDate: new Date(),
        status: true
    },
    {
        _id: 'gkd7h2lsdfnm',
        title: 'Estudiar',
        idUser: 'skd674kjnls',
        description: 'Leer los eventos del DOM',
        dueDate: new Date(),
        status: false
    },
    {
        _id: 'asdf874nfsd',
        title: 'Trabajar',
        idUser: 'asdfv7a3890',
        description: 'Ir al trabajo de 7 a 5',
        dueDate: new Date(),
        status: true
    },
];

export const loadTasks = () => {
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
}