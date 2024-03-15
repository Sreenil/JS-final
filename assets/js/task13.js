let books = [];

function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    if (books.length === 0) {
        bookList.innerHTML = '<p>No books available</p>';
    } else {
        books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book');
            bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Price: $${book.price}</p>
            `;
            bookList.appendChild(bookItem);
        });
    }
}

function addBook() {
    const title = prompt('Enter book title:');
    const author = prompt('Enter book author:');
    const price = parseFloat(prompt('Enter book price:'));
    if (title && author && !isNaN(price)) {
        const book = { title, author, price };
        books.push(book);
        displayBooks();
    } else {
        alert('Invalid input. Please try again.');
    }
}

function searchBook() {
    const searchTerm = prompt('Enter search term:');
    const searchResults = books.filter(book => {
        return book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               book.author.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (searchResults.length === 0) {
        alert('No matching books found.');
    } else {
        alert(`Matching books:\n${searchResults.map(book => `${book.title} by ${book.author}`).join('\n')}`);
    }
}

document.getElementById('addBookBtn').addEventListener('click', addBook);
document.getElementById('searchBookBtn').addEventListener('click', searchBook);

books.push({ title: 'Book1', author: 'Author1', price: 10 });
books.push({ title: 'Book2', author: 'Author2', price: 15 });

displayBooks();
