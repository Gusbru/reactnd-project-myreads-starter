import React from 'react';
//import Book from './Book';
import './Bookshelf.css';

const Bookshelf = ({ status, bookList, changeStatus}) =>  {
    const currentBooks = bookList.filter(_ => _.status === status);
    return(
        <div key={status} className="bookshelf">
            <h2 className="bookshelf-title">{status}</h2>
            <ol className="books-grid">
                {currentBooks.map(item => (
                    <li key={item.id}>                 
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>
                                <div className="book-shelf-changer">
                                    <select value={item.status} onChange={(e) => changeStatus(e.target.value, item)}>
                                        <option value="none" disabled>Move to...</option>
                                        <option value="Currently Reading">Currently Reading</option>
                                        <option value="Want to Read">Want to Read</option>
                                        <option value="Read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{item.title}</div>
                            <div className="book-authors">Mark Twain</div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Bookshelf;