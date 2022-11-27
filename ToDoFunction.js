const add = document.querySelector('.add');
var inputValue = document.querySelector('.input');
const container = document.querySelector('.container');

if (window.localStorage.getItem("todos") == undefined) {
    var todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}
var todoEX = window.localStorage.getItem("todos");
var todos =
    JSON.parse(todoEX);

class item {
    constructor(name) {
        this.createItem(name);
    }
    createItem(name) {
        var itemBox = document.createElement('div');
        itemBox.classList.add('item');

        var input = document.createElement('input');
        input.type = "text";
        input.disabled = true;
        input.value = name;
        input.classList.add("item_input");


        var edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerHTML = "EDIT";
        edit.addEventListener('click', () => { this.edit(input, name) });



        var remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = "REMOVE";
        remove.addEventListener('click', () => { this.remove(itemBox, name) });

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);
    }
    edit(input, name) {

        if (input.disabled == true) {
            input.disabled = !input.disabled;
        } else {
            input.disabled = !input.disabled;
            let indexOf = todos.indexOf(name);
            todos[indexOf] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }


    remove(itemBox, name) {
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }

}
add.addEventListener('click', check);
window.addEventListener('Keydown', (e) => {
    if (e.which == 13) {
        check();
    }
});

function check() {
    if (inputValue.value != "") {
        new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
        inputValue.value = "";
    } else if (inputValue.value == "") {
        alert("Please Enter Some task");
    }
}

for (var v = 0; v < todos.length; v++) {
    new item(todos[v]);
}