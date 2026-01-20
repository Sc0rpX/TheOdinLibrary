const myLibrary = [];

function Book(id, title, author, pages, readStatus, bookCoverUrl) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.bookCoverUrl = bookCoverUrl;
}

Book.prototype.toggleReadStatus = function() {
    this.readStatus = this.readStatus === true ? false : true;
}

function addBookToLibrary(title, author, pages, readStatus, bookCoverUrl) {
    const id = crypto.randomUUID();
    const newBook = new Book(id, title, author, pages, readStatus, bookCoverUrl);

    myLibrary.push(newBook);
}

const booksContainer = document.querySelector(".books_container");

function displayBooks() {
    for (book of myLibrary){
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.id = book.id;

        const bookCover = document.createElement("div");
        bookCover.classList.add("book_cover");
        const bookCoverImg = document.createElement("img");
        bookCoverImg.src = book.bookCoverUrl;
        bookCoverImg.alt = `${book.title} books cover image`;
        bookCover.appendChild(bookCoverImg);
        card.appendChild(bookCover);

        const bookInfo = document.createElement("div");
        bookInfo.classList.add("book_info");

        const bookTitle = document.createElement("h2");
        bookTitle.classList.add("book_title");
        bookTitle.textContent = book.title;
        bookInfo.appendChild(bookTitle);

        const bookAuthor = document.createElement("p");
        bookAuthor.classList.add("book_author");
        bookAuthor.textContent = book.author;
        bookInfo.appendChild(bookAuthor);

        const bookPages = document.createElement("p");
        bookPages.classList.add("book_pages");
        bookPages.textContent = `Pages: ${book.pages}`;
        bookInfo.appendChild(bookPages);

        card.appendChild(bookInfo);

        const actionButtons = document.createElement("div");
        actionButtons.classList.add("action_buttons");

        const readStatusBtn = document.createElement("button");
        readStatusBtn.className = book.readStatus === true ? "read_status" : "not_read_status";
        readStatusBtn.textContent = book.readStatus === true ? "Read" : "Not Read";

        // Read status changing feature
        readStatusBtn.addEventListener("click", (event) => {
            const parentCard = event.currentTarget.closest(".card");
            const bookId = parentCard.dataset.id;
            const bookIndex = myLibrary.findIndex(book => book.id === bookId)

            myLibrary[bookIndex].toggleReadStatus();
            event.currentTarget.textContent = myLibrary[bookIndex].readStatus === true ? "Read" : "Not Read";
            event.currentTarget.className = myLibrary[bookIndex].readStatus === true ? "read_status" : "not_read_status";
        })

        actionButtons.appendChild(readStatusBtn);

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove_button");

        const deleteIcon = document.createElement("img");
        deleteIcon.src = "images/delete.svg";
        deleteIcon.alt = "delete icon";

        removeBtn.appendChild(deleteIcon);

        // Remove button event to remove a book
        removeBtn.addEventListener("click", (event) => {
            const parentCard = event.target.closest(".card");
            const bookId = parentCard.dataset.id;
        
            parentCard.remove();

            const indexOfBook = myLibrary.findIndex(book => book.id === bookId);
            myLibrary.splice(indexOfBook, 1);
        })

        actionButtons.appendChild(removeBtn);

        card.appendChild(actionButtons);
        booksContainer.appendChild(card);
    }
}

// Demo Books
addBookToLibrary("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 443, true, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0Rg-K61ZSq6x6jtg8v91Jy006W3GZIaU-6WHqD_K-Nf4NOjxCIJ3UHtpcSlZimG8kDYjkw&s");
addBookToLibrary("Educated", "Tara Westover", 334, true, "https://0.academia-photos.com/attachment_thumbnails/66592589/mini_magick20210423-6227-cnlv42.png?1619184394");
addBookToLibrary("The Immortal Life of Henrietta Lacks", "Rebecca Skloot", 370, false, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfo0OIiIJhsig3HIP_weCFMXnrFijkJ4rFJIxWEqzR5aAw7PaSQDB41n_h8s-F-VV4VdhY&s");

displayBooks();


// Take user input
const confirmBtn = document.getElementById("confirm_btn");

confirmBtn.addEventListener("click", () => {
    const bookTitle = document.getElementById("book_title_input").value;
    const bookAuthor = document.getElementById("book_author_input").value;
    const bookPages = document.getElementById("book_page_number_input").value;
    const readStatus = document.getElementById("read_status").value === "yes" ? true : false;
    const bookCoverUrl = document.getElementById("book_cover_url").value;

    console.log(`${bookTitle}, ${bookAuthor}, ${bookPages}, ${readStatus}, ${bookCoverUrl}`)

    addBookToLibrary(bookTitle, bookAuthor, bookPages, readStatus, bookCoverUrl);
    booksContainer.replaceChildren();
    displayBooks();
})


// Show Add Book dialog
const addBookBtn = document.getElementById("add_book_btn");
const addBookDialog = document.getElementById("add_book_dialog");

addBookBtn.addEventListener("click", () => {
    addBookDialog.showModal();
    document.getElementById("add_book_form").reset();
})

