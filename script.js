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

    myLibrary.forEach((book, index) => {
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Page Count: ${book.pages}</p>
            <p>Status: ${book.isRead ? "Read" : "Not Read"}</p>
        `;

        // create toggle read button
        let toggleReadBtn = document.createElement("button");
        toggleReadBtn.textContent = "Toggle Read";
        toggleReadBtn.classList.add("toggle-read-btn");
        toggleReadBtn.addEventListener("click", () => toggleReadStatus(index));

        // create remove button
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");
        removeBtn.addEventListener("click", () => removeBook(index));

        // append buttons to book
        bookCard.appendChild(toggleReadBtn)
        bookCard.appendChild(removeBtn);

        library.appendChild(bookCard);
    });
}

function toggleReadStatus(index) {
    myLibrary[index].isRead = !myLibrary[index].isRead; // toggle the read status
    displayBooks(); // update ui
}

function removeBook(index) {
    myLibrary.splice(index, 1); // remove book from array
    displayBooks(); // update ui
}

document.addEventListener("DOMContentLoaded", () => {
    const addBookBtn = document.getElementById("add-book-btn");
    const bookFormContainer = document.getElementById("book-form-container");
    const bookForm = document.getElementById("book-form");
    const closeFormBtn = document.getElementById("close-form-btn");
    const modalBackdrop = document.getElementById("modal-backdrop");

    // function ot show the form and backdrop
    function openModal() {
        bookFormContainer.classList.add("active");
        modalBackdrop.classList.add("active");
    }

    // function to close the form and backdrop
    function closeModal() {
        bookFormContainer.classList.remove("active");
        modalBackdrop.classList.remove("active");
    }

    // open form when clicking "Add Book"
    addBookBtn.addEventListener("click", openModal);

    // close form when clicking cancel
    closeFormBtn.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", closeModal);

    // handle form submision
    bookForm.addEventListener("submit", (event) => {
        event.preventDefault(); // prevent default page reload

        // get input values
        const title = document.getElementById("book-title").value;
        const author = document.getElementById("book-author").value;
        const pages = document.getElementById("book-pages").value;
        const isRead = document.getElementById("book-isRead").checked;

        // add book to library
        addBookToLibrary(title, author, pages, isRead);
        displayBooks();     // update ui

        // clear and close form
        bookForm.reset();
       closeModal()
    });
});

displayBooks();

// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
// addBookToLibrary("The Hobbit 2", "J.R.R. Tolkien", 310, false);
// console.log(displayBooks())
