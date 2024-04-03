// Elements
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const dark = document.querySelector('.dark');
const h3 = document.querySelector('h3');
const list = document.querySelectorAll('li');
const cancel = document.querySelector('.cancel');
const newNote = document.querySelector('.note');
const note = document.querySelector('#textarea');
const cancelSave = document.querySelector('.lastbuttons');
const save = document.querySelector('.save');
const ul = document.querySelector('ul');
const textArea = document.querySelector('.textArea');

console.log(cancelSave)


// dark theme
let changeBG = () => {
    main.classList.toggle('darkMain');
    h3.classList.toggle('darkMain');
    nav.classList.toggle('darkNav');
    for (let lists of list) {
        lists.classList.toggle('darkText');
    };

    if (dark.textContent === 'Dark Theme') {
        dark.innerText = 'Light Theme';
    } 
    else {
        dark.innerText = 'Dark Theme';
    }
};
dark.addEventListener('click', changeBG);


// Cancel Note
let hideArea = () => {
    textArea.classList.add('hidden');
    textArea.classList.remove('show');
}
cancel.addEventListener('click', hideArea);


// New Note
let showArea = () => {
    textArea.classList.add('show');
    textArea.classList.remove('hidden');
}
newNote.addEventListener('click', showArea);

let clearNote = () => {
    note.value = ''
}
newNote.addEventListener('click', clearNote);

// Save Note
let notesArray = [{title:"note one", body:"this is my first note"},{title:"note two", body:"this is my second note"}]

let saveNote = () => {
    let title = prompt('What is the title of your note?');
    let body = note.value.trim();
    let newNote = {title:title, body:body};
    newNote.title = title;
    newNote.body = body;
    let newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(newNote.title));
    ul.appendChild(newLi);
    notesArray.push(newNote);
}
save.addEventListener('click', saveNote);


// Navigate through notes
let navigateNotes = (event) => {
    for (let notes of notesArray) {
        if (event.target.textContent === notes.title) {
            note.value = notes.body;
        }
    }
};
ul.addEventListener('click', navigateNotes);
