import React from 'react';
import { Link } from 'react-router-dom';
import './NewBook.css';

const NewBook = ({ addBook }) => {
    return(
        <div>
            <div className="search-books-bar">
                <Link 
                    className="close-search" 
                    to="/"
                >Back</Link>
                <input  type="text"/>
            </div>
        </div>
    );
}

export default NewBook;