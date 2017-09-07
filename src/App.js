import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import NewBook from './NewBook';
import Library from './Library';
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

    return (
      <div className="app">
        
        <Route exact path="/" render={() => (
          <Library 
          bookList={books}
          changeStatus={this.changeStatus}
          />
        )}/>

        <Route exact path="/search" render={() => (
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
