let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
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

        let bookTitle = document.createElement('h2');
        bookTitle.className = 'book-title';
        bookTitle.innerText = book.title;

        let bookAuthor = document.createElement('h3');
        bookAuthor.className = 'book-author';
        bookAuthor.innerText  = `by ${book.author}`;

        let bookPages = document.createElement('p');
        bookPages.className = 'book-pages';
        bookPages.innerText = `Pages: ${book.pages}`;

        let bookRead = document.createElement('div');
        bookRead.className = 'book-read';
        bookRead.innerText = `Read: `;

        let input = document.createElement('input');
        input.className = 'book-read-status';
        input.setAttribute("type", "checkbox");
        bookRead.append(input);
        input.innerText = `${book.read ? input.checked = true : input.checked = false}`;

        input.addEventListener('click', (e) => {
            if (e.target.checked === true) {
                e.target.textContent = true;
            } else if (e.target.checked === false) {
                e.target.textContent = false;
            }
        })

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.innerText = 'X';    

        removeBtn.addEventListener('click', () => {
            if (removeBtn.parentNode.dataset.index === bookCard.dataset.index) {
                removeBtn.parentElement.remove();
                myLibrary.splice(i, 1);
            }
        })

        bookCard.append(bookTitle, bookAuthor, bookPages, bookRead, removeBtn);

        library.append(bookCard);
    }
}

const addBookBtn = document.getElementById('add-book-btn');
const addBookForm = document.getElementById('add-book-form');

addBookBtn.addEventListener('click', () => {
    addBookForm.style.display = 'block';
})

addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    addBookForm.reset();
    addBookForm.style.display = 'none';
})