const todoList = [{
    name: "Go to gym",
    dueDate: '22-12-2023'
}, {
    name: "Eat meal",
    dueDate: '20-11-2023'
}];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoobject = todoList[i];
        const { name, dueDate } = todoobject;
        const html = `
            <div>${name}</div>
            <div> ${dueDate}</div>
                <button class="delbutton"
                onclick="
                   todoList.splice(${i}, 1);
                   renderTodoList();
                ">Delete</Button> 
            `;
        todoListHTML += html;        
    }

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

       todoList.push({
        name,
        dueDate
    });
       console.log(todoList);

       inputElement.value = '';
       dateInputElement.value = '';

       renderTodoList();
}