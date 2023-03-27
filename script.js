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
    let read = document.getElementById('read').checked;

    let newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);

    adding();
}

function adding() {
    const library = document.getElementById('library');
    library.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.dataset.index = `data-myLibrary-${i}`;

        let bookTitle = document.createElement('div');
        bookTitle.className = 'book-title';
        bookTitle.innerText = book.title;

        let bookAuthor = document.createElement('div');
        bookAuthor.className = 'book-author';
        bookAuthor.innerText  = `by ${book.author}`;

        let bookPages = document.createElement('div');
        bookPages.className = 'book-pages';
        bookPages.innerText = `Pages: ${book.pages}`;

        let removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerText = 'X';    

        removeBtn.addEventListener('click', function() {
            if (removeBtn.parentNode.dataset.index === bookCard.dataset.index) {
                removeBtn.parentElement.remove();
                myLibrary.splice(i, 1);
            }
        })

        bookCard.append(bookTitle, bookAuthor, bookPages, removeBtn);

        library.append(bookCard);
    }
}

const newBookBtn = document.getElementById('new-book-btn');
const newBookForm = document.getElementById('new-book-form');

newBookBtn.addEventListener('click', function() {
    newBookForm.style.display = 'block';
})

newBookForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addBookToLibrary();
    newBookForm.reset();
    newBookForm.style.display = 'none';
})