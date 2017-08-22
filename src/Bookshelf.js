import React from 'react';
import Book from './Book';
import './Bookshelf.css';

const Bookshelf = ({ status, bookList }) => {
    return (
        <div key={status} className="bookshelf">
            <h2 className="bookshelf-title">{status}</h2>
            {bookList.map(item => (
                <Book title={item.title} />
            ))}
            
        </div>
    );
};

export default Bookshelf;