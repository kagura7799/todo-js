const inputName = document.getElementById('title') // Возьмём элементы из HTML
const btnSend = document.getElementById('create')
const listElement = document.getElementById('list')

// const note = ['Погладить кошку', 'Попить чайку', 'Поспать']


// function render () {  
//     // for (let i = 0; i < note.length; i++)    // Вариант цикла 1 
// //     listElement.insertAdjacentHTML('beforeend', returnELement(note[i]))
// // 

// // for (let array of note) {                       // Вариант цикла 2 (проще)
// //     listElement.insertAdjacentHTML('beforeend', returnELement(array))
// // }

// }
// render()
const note = [
    {
        title: 'Погладить кошку',
        complete: true,
    },
    
    {
        title: 'Попить чайку',
        complete: true,
    },

    {
        title: 'Поспать',
        complete: false, 
    },
]

listElement.onclick = function(event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

    if (type === 'toggle') {
        note[index].complete = !note[index].complete
    }
    else if (type === 'remove') {
        note.splice(index, 1)
    }
    }
    render()
}

function render () {  
    listElement.innerHTML = ''
    if (note.length === 0) {
        listElement.innerHTML = '<p>Нет заметок</p>'
    }
    for (let i = 0; i < note.length; i++)     
    listElement.insertAdjacentHTML('beforeend', returnELement(note[i], i))
    }
    render()

btnSend.onclick = function () {
    if (inputName.value.length === 0) {
        return
    }
    else if (inputName.value === '') {
        return
    }
    const newNote = {
        title: inputName.value,
        completed: false,
    }

    note.push(newNote) // Добавим в список note список newNote в котором лежит инпут
    render()
    inputName.value = '' // Опустошим строку ввода после отправки    
}

function returnELement(note, index) {
    return `
            <li
                class="list-group-item d-flex justify-content-between align-items-center"
                >
                <span class="${note.complete ? 'text-decoration-line-through' : ''}">${note.title}</span>
                <span>
                <span class="btn btn-small btn-${note.complete ? 'warning' : 'success'}" data-index=${index} data-type='toggle'>&check;</span>
                <span class="btn btn-small btn-danger"data-index=${index} data-type='remove'>&times;</span>
                </span>
             </li>
             ` 
}
