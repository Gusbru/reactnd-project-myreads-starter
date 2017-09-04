import React from 'react';
import Book from './Book';
import './Bookshelf.css';

const Bookshelf = ({ status, shelf, bookList, changeStatus }) =>  {
    const currentBooks = bookList.filter(_ => _.shelf === status);
    return(
        <div key={status} className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <Book 
                currentBooks={currentBooks} 
                changeStatus={changeStatus}/>
        </div>
    );
}

export default Bookshelf;