import React from 'react'
//import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  addBook() {
    this.setState(prev => {
      const { books = [] } = prev;
      const newBook = {
        id: books.length + 1,
        title: "test",
        status: "Want to Read"
      };
      books.push(newBook);
      return { books: books }
    });
  }

  render() {
    const { books = [] } = this.state;

    // organize the books in three different collections,
    // according with the book status: "Currently Reading", "Want to Read"
    // and "Read"
    const bookStatus = [
      { status: 'Currently Reading', books },
      { status: 'Want to Read', books },
      { status: 'Read', books}
    ];
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {bookStatus.map(book => (
                <Bookshelf 
                  key={book.status} 
                  status={book.status} 
                  bookList={books}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="open-search">
          <a >Add a book</a>
        </div>
      </div>
    )
  }
}

export default BooksApp
