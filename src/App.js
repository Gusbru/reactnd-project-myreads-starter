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
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      //console.log(books);
    });
  }

  changeStatus = (newStatus, currentBook) => {
    this.setState(function(state){
      const { books = [] } = state;
      const allBooks = books.filter(_ => _.id !== currentBook.id);
      if (newStatus !== "none") {
        currentBook.shelf = newStatus
      }
      allBooks.push(currentBook);
      return{ books: allBooks };
    });
    BooksAPI.update(currentBook, newStatus);
  }

  render() {
    const { books = [] } = this.state;

    // organize the books in three different collections,
    // according with the book status: "Currently Reading", "Want to Read"
    // and "Read"
    const bookStatus = [
      {value: 'currentlyReading', shelf: 'Currently Reading'}, 
      {value: 'wantToRead', shelf: 'Want to Read'},
      {value: 'read', shelf: 'Read'}];
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
                      key={status.value} 
                      status={status.value}
                      shelf={status.shelf} 
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
            search={BooksAPI.search}
            changeStatus={this.changeStatus}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
