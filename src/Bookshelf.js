import React, { Component } from 'react';
import Book from './Book';
import './Bookshelf.css';

class Bookshelf extends Component {
    
    render(){
        const status = this.props.status;
        const bookList = this.props.bookList;
        const currentBooks = bookList.filter(_ => _.status === status);
        return(
            <div key={status} className="bookshelf">
                <h2 className="bookshelf-title">{status}</h2>
                {currentBooks.map(item => (
                    
                    <Book title={item.title} />
                ))}
            </div>
        );
    }
}

export default Bookshelf;