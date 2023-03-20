let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.querySelector('input[name="read_status"]:checked').value;
    
    let newBook = new Book(title, author, pages, read);
    console.log(newBook)
}

let newBookBtn = document.querySelector('#new-book-btn');
let newBookForm = document.querySelector('#new-book-form');

newBookBtn.addEventListener('click', function(){
    newBookForm.style.display = 'block';
})

newBookForm.addEventListener('submit', function(e){
    e.preventDefault();
    addBookToLibrary();
})