const todoList=[{name:'study',date:'2025-09-04'}];
rendertodoList();
function rendertodoList(){
    let todoListHTML='';
    for(let i=0;i<todoList.length;i++)
    {
        const todoObj=todoList[i];
        const name = todoObj.name;
        const date = todoObj.date;
        const html=`
        <div>${name}</div>
        <div>${date}</div>
        <button onclick = "todoList.splice(${i},1); rendertodoList();" class = "js-delete-button">Delete</button>`;
        todoListHTML+=html;
    }
    document.querySelector('.js-todo-list').innerHTML=todoListHTML;
    console.log(todoListHTML);
}
function add(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-date-input');
    const date = dateInputElement.value;
    todoList.push({name:name, date:date});
    console.log(todoList);
    inputElement.value='';
    // dateInputElement='dd-mm-yyyy';
    rendertodoList();
}