import React from 'react';
import { Link, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf';
import NewBook from './NewBook';
import './App.css';

class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: []
    };
    this.changeStatus = this.changeStatus.bind(this);
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
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
      return { books: books };
    });
  }

  changeStatus(newStatus, currentBook) {
    this.setState(function(state){
      const { books = [] } = state;
      const allBooks = books.filter(_ => _.id !== currentBook.id);
      if (newStatus !== "none") {
        currentBook.status = newStatus
      }
      allBooks.push(currentBook);
      return{ books: allBooks };
    });
  }

  render() {
    const { books = [] } = this.state;

    // organize the books in three different collections,
    // according with the book status: "Currently Reading", "Want to Read"
    // and "Read"
    const bookStatus = ['Currently Reading', 'Want to Read', 'Read'];
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
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
                      changeStatus={this.changeStatus}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* <a onClick={this.addBook}>Add a book</a> */}
            <Link 
              to="/newbook" 
              className="open-search"
            >Add a book</Link>
          </div>
        )}/>
        <Route exact path="/newbook" render={() => (
          <NewBook 
            addBook={this.addBook}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
