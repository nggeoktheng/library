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

    myLibrary.push(newBook);

    adding();
}

function adding() {
    let bookLibrary = document.getElementById('book-library');
    bookLibrary.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookCard = document.createElement('div');
        bookCard.className = 'bookCard';
        bookCard.style.borderColor = 'orange';
        bookCard.style.backgroundColor = 'orange';
        bookCard.style.width = '35vh';
        bookCard.style.margin = '0.5rem';
        bookCard.style.padding = '0.3rem';
        bookCard.style.textAlign = 'center';
        bookCard.innerHTML = `
            <div class="book">
                <h3>${book.title}</h2>
                <h4>by ${book.author}</h3>
                <p>Pages: ${book.pages}</p>
                <p>Read status: ${book.read}</p>
            </div>    
        `;
        bookLibrary.append(bookCard);
    }
}

let newBookBtn = document.querySelector('#new-book-btn');
let newBookForm = document.querySelector('#new-book-form');

newBookBtn.addEventListener('click', function(){
    newBookForm.style.display = 'block';
})

newBookForm.addEventListener('submit', function(e){
    e.preventDefault();
    addBookToLibrary();
    newBookForm.style.display = 'none';
    newBookForm.reset();
})