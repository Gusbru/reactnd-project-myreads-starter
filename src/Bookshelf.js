import React from 'react';
import './Bookshelf.css';

const Bookshelf = ({ status, bookList }) => {
    return (
        <div key={status} className="bookshelf">
            <h2 className="bookshelf-title">{status}</h2>
            
            <p>{bookList}</p>
        </div>
    );
};

export default Bookshelf;