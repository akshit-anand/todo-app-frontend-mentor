//get input
const inputTxt = document.querySelector('#inputTask')
    //get tasks container
const tasksList = document.querySelector('.tasksList')

//sample taskList store on array
const sampleTasks = ['Jog around the park 3x', '10 minutes meditation', 'Read for 1 hour', 'Pick up groceries', 'Complete Todo App on Frontend Mentor']
let allTasksArr = [] //new task array which will store newly added task with sample task

//add sample data by default
for (let sampleTask of sampleTasks) {
    let tasksContainer = document.createElement('div')
    tasksContainer.classList.add('task', 'active')
        //tasksContainer.setAttribute('id', sampleTask.toLocaleLowerCase())
    tasksContainer.setAttribute('id', 'active')
    tasksList.appendChild(tasksContainer)

    let checkBoxContainer = document.createElement('label')
    checkBoxContainer.classList.add('checkbox-container')
    let checkBox = document.createElement('input')
    checkBox.type = 'checkbox' //replacement of setAttribute
    checkBox.classList.add('checkbox')
    checkBoxContainer.appendChild(checkBox)
    let checkMark = document.createElement('span')
    checkMark.classList.add('checkmark')
    checkBoxContainer.appendChild(checkMark)
    tasksContainer.appendChild(checkBoxContainer)

    let task = document.createElement('p')
    task.contentEditable = true //replacement of setAttribute
    task.classList.add('taskText')
    tasksContainer.appendChild(task)
    let taskText = document.createTextNode(sampleTask)
    task.appendChild(taskText)

    let deleteBtn = document.createElement('span')
    deleteBtn.classList.add('delete', 'delete-light')
    tasksContainer.appendChild(deleteBtn)
    deleteBtn.textContent = 'x'

    allTasksArr.push(tasksContainer) //add sample task in new array
}

/* Search on type
inputTxt.oninput = () => {
    let listTasks = document.querySelectorAll('.task')
    const inputTxtValue = inputTxt.value.toUpperCase()
    for (let listTask of listTasks) {
        if (listTask.textContent.toUpperCase().indexOf(inputTxtValue) > -1) {
            listTask.style.display = ''
        } else {
            listTask.style.display = 'none';
        }
    }
}*/

//add task manually
const addNewTask = () => {
    const inputTxtValue = inputTxt.value
    if (inputTxtValue === '') {
        alert('No task to add. Please Write an task in TextBox to Add')
    } else {
        let tasksContainer = document.createElement('div')
        tasksContainer.classList.add('task', 'active')
        tasksContainer.setAttribute('id', 'active')
        tasksList.appendChild(tasksContainer)

        let checkBoxContainer = document.createElement('label')
        checkBoxContainer.classList.add('checkbox-container')
        let checkBox = document.createElement('input')
        checkBox.type = 'checkbox' //replacement of setAttribute
        checkBox.classList.add('checkbox')
        checkBoxContainer.appendChild(checkBox)
        let checkMark = document.createElement('span')
        checkMark.classList.add('checkmark')
        checkBoxContainer.appendChild(checkMark)
        tasksContainer.appendChild(checkBoxContainer)

        let task = document.createElement('p')
        task.contentEditable = true //replacement of setAttribute
        task.classList.add('taskText')
        tasksContainer.appendChild(task);
        let taskText = document.createTextNode(inputTxtValue)
        task.appendChild(taskText)

        let deleteBtn = document.createElement('span')
        deleteBtn.classList.add('delete')
        tasksContainer.appendChild(deleteBtn)
        deleteBtn.textContent = 'x'

        allTasksArr.push(tasksContainer)
        console.log(allTasksArr)

        inputTxt.value = ''
    }
}

//delete tasks
const deleteTask = () => {
    let getDeleteBtn = document.getElementsByClassName('delete')
    if (getDeleteBtn != null) {
        for (let deleteOne of getDeleteBtn) {
            deleteOne.addEventListener('click', () => {
                deleteOne.parentElement.remove()
                countTask()
            })
        }
    } else {
        console.log('No Element Present')
    }
}
deleteTask()

//mark task as completed
const checkTask = () => {
    let checkInput = document.getElementsByClassName('checkbox')
    for (let check of checkInput) {
        check.onclick = () => {
            if (check.checked) {
                check.parentNode.parentNode.classList.add('completed')
                check.parentNode.parentNode.classList.remove('active')
                check.parentNode.parentNode.setAttribute('id', 'completed')
                check.setAttribute('checked', 'true')
                check.parentNode.nextSibling.classList.add('taskText-marked')
            } else {
                check.parentNode.parentNode.classList.add('active')
                check.parentNode.parentNode.classList.remove('completed')
                check.parentNode.parentNode.setAttribute('id', 'active')
                check.removeAttribute('checked', 'true')
                check.parentNode.nextSibling.classList.remove('taskText-marked')
            }
        }
    }
}
checkTask()

//count how much task left
const countTask = () => {
    let tasks = document.querySelectorAll('.task')
    let taskCount = document.querySelector('.task-count')
    taskCount.innerHTML = tasks.length + ' left!'
}
countTask()

//filter taskList
const filterTask = () => {
    let allBtn = document.querySelector('.allBtn')
    let activeBtn = document.querySelector('.activeBtn')
    let completedBtn = document.querySelector('.completedBtn')

    //change allButton color
    allBtn.onmouseover = () => {
        allBtn.classList.add('on-hover')
        if (allBtn.classList.contains('selected')) {
            allBtn.style.color = 'hsl(220, 98%, 61%)'
        }
    }
    allBtn.onmouseout = () => {
        allBtn.classList.remove('on-hover')
    }

    activeBtn.onmouseover = () => {
        activeBtn.classList.add('on-hover')
        if (activeBtn.classList.contains('selected')) {
            activeBtn.style.color = 'hsl(220, 98%, 61%)'
        }
    }
    activeBtn.onmouseout = () => {
        activeBtn.classList.remove('on-hover')
    }

    completedBtn.onmouseover = () => {
        completedBtn.classList.add('on-hover')
        if (completedBtn.classList.contains('selected')) {
            completedBtn.style.color = 'hsl(220, 98%, 61%)'
        }
    }
    completedBtn.onmouseout = () => {
        completedBtn.classList.remove('on-hover')
    }


    //display all tasks
    allBtn.onclick = () => {
        let filterAll = (item) => {
            item.style.display = 'block'
        }
        allTasksArr.forEach(filterAll)
        allBtn.classList.add('selected')
        completedBtn.classList.remove('selected')
        activeBtn.classList.remove('selected')
        countTask() //count all tasks
    }

    allBtn.click() // clicking All filter by default

    //Display only active/unchecked task
    activeBtn.onclick = () => {
        let filterActive = (item) => {
            if (item.id == 'completed') {
                item.style.display = 'none'
            } else {
                item.style.display = 'block'
            }
        }
        allTasksArr.forEach(filterActive)
        allBtn.classList.remove('selected')
        completedBtn.classList.remove('selected')
        activeBtn.classList.add('selected')
            //count active tasks
        let activeTasks = document.querySelectorAll('#active')
        let taskCount = document.querySelector('.task-count')
        taskCount.innerHTML = activeTasks.length + ' left!'
    }

    //display only completed/checked task
    completedBtn.onclick = () => {
        let filterCompleted = (item) => {
            if (item.id == 'active') {
                item.style.display = 'none'
            } else {
                item.style.display = 'block'
            }

        }
        allTasksArr.forEach(filterCompleted)
        allBtn.classList.remove('selected')
        completedBtn.classList.add('selected')
        activeBtn.classList.remove('selected')
            //count completed tasks
        let completedTasks = document.querySelectorAll('.completed')
        let taskCount = document.querySelector('.task-count')
        taskCount.innerHTML = completedTasks.length + ' left!'
    }

}
filterTask()

//clear marked/completed tasks
const clearCompleted = () => {
    let clearTask = document.querySelector('.clear-completed')
    clearTask.onclick = () => {
        let removeCompleted = (item) => {
            if (item.id == 'completed') {
                item.remove()
            } else {
                filterTask()
            }
        }
        allTasksArr.forEach(removeCompleted)
        countTask()
    }
}
clearCompleted()

//add new tasks on enter
inputTxt.onkeypress = (e) => {
    let key = e.keyCode
    if (key == 13) {
        addNewTask()
        deleteTask()
        checkTask()
        countTask()
        clearCompleted()
        filterTask()
    }
}

let iconDark = document.getElementById('dark-mode')
let iconLight = document.getElementById('light-mode')

iconDark.onclick = () => {
    iconDark.style.display = 'none'
    iconLight.style.display = 'block'
    document.body.classList.add('dark-mode')
}

iconLight.onclick = () => {
    iconLight.style.display = 'none'
    iconDark.style.display = 'block'
    document.body.classList.remove('dark-mode')
}