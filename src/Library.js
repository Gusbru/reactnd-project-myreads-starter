import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';
import './Library.css';

class Library extends Component {
  render(){
    const bookStatus = [
      {value: 'currentlyReading', shelf: 'Currently Reading'}, 
      {value: 'wantToRead', shelf: 'Want to Read'},
      {value: 'read', shelf: 'Read'}
    ];

    return(
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
                  bookList={this.props.bookList} 
                  changeStatus={this.props.changeStatus}
                />
              ))}
            </div>
          </div>
        </div>
        <Link 
          to="/search" 
          className="open-search">
            Add a book
        </Link>
      </div>
    );
  }    
};

export default Library;