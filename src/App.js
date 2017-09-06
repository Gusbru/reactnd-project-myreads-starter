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
    BooksAPI.update(currentBook, newStatus).then(() => {
      currentBook.shelf = newStatus;

      this.setState(state => ({
        books: state.books.filter(_ => _.id !== currentBook.id).concat(currentBook)
      }))
    })  
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
            myCurrentBooks={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
