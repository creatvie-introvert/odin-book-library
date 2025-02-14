const myLibrary = [];

function Book(title, author, pages, isRead) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    // take params, create a book then store it in the array
    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
}

function displayBooks() {
    // clear current library container
    let library = document.querySelector(".library");
    library.textContent = "";

    myLibrary.forEach(book => {
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Page Count: ${book.pages}</p>
            <p>Status: ${book.isRead ? "Read" : "Not Read"}</p>
        `;

        library.appendChild(bookCard);
    })
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
addBookToLibrary("The Hobbit 2", "J.R.R. Tolkien", 310, false);
console.log(displayBooks())
