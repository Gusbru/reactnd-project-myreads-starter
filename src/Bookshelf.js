import React from 'react';
import './Bookshelf.css';

const Bookshelf = ({ status, shelf, bookList, changeStatus }) =>  {
    const currentBooks = bookList.filter(_ => _.shelf === status);
    return(
        <div key={status} className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <ol className="books-grid">
                {currentBooks.map(item => (
                    <li key={item.id}>                 
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${item.imageLinks.smallThumbnail}")` }}></div>
                                <div className="book-shelf-changer">
                                    <select value={item.shelf} onChange={(e) => changeStatus(e.target.value, item)}>
                                        <option value="none" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{item.title}</div>
                            <div className="book-authors">{item.authors}</div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Bookshelf;