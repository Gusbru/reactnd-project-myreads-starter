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

  addBook = () => {
    this.setState(prev => {
      const { books = [] } = prev;
      const newBook = {
        id: books.length + 1,
        title: 'test',
        author: 'Mark Twain',
        status: 'Want to Read',
        imageUrl: "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"
      };
      books.push(newBook);
      return { books: books }
    });
  }

  changeStatus(newStatus, book) {
    // this.state(function(state) {

    // });
  }

  render() {
    const { books = [] } = this.state;

    // organize the books in three different collections,
    // according with the book status: "Currently Reading", "Want to Read"
    // and "Read"
    const bookStatus = ['Currently Reading', 'Want to Read', 'Read'];
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {bookStatus.map(status => (
                <Bookshelf 
                  key={status} 
                  status={status} 
                  bookList={books}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="open-search">
          <a onClick={this.addBook}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default BooksApp
