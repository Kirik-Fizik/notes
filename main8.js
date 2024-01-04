let addNote = document.getElementById('addNote');
let myArray = ['Это страница для ваших заметок'];
addNote.onclick = function () {
    let newNote = document.getElementById('newNote').value;
    let div = document.createElement('div');
    let button = document.createElement('button');
    button.innerText = 'Удалить';
    button.onclick = function () {
        this.parentNode.classList.add('hide');
    }
    div.appendChild(document.createTextNode(newNote));
    div.appendChild(button);
    document.getElementById('output').appendChild(div);
    document.getElementById('newNote').value = "";
}
function load () {
    console.log(myArray)
    for (let i = 0; i < myArray.length; i++) {
        let newNote = myArray[i];
        let div = document.createElement('div');
        let button = document.createElement('button');
        button.innerText = 'Удалить';
        button.onclick = function () {
            this.parentNode.classList.add('hide');
        }
        div.appendChild(document.createTextNode(newNote));
        div.appendChild(button);
        document.getElementById('output').appendChild(div);
    }
}
window.onload = setTimeout(load, 1000);