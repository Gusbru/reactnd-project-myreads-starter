import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NewBook.css';

class NewBook extends Component {

    state = {
        query: []
    };

    

    updateQuery = (inputText) => {
        const self = this;
        this.props.search(inputText, 20)
        .then(function(item){
            self.setState({
                query: item
            })
        })
        .catch(function(error){
            console.log(error);
        });
    };

    

    render(){
        let showingBooks = this.state.query;
        console.log("ShowingBooks = " + showingBooks);
        return(
            <div>
                <div className="search-books-bar">
                    <Link 
                        className="close-search" 
                        to="/"
                    >Back</Link>
                    
                        <input 
                            type="text"
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    
                </div>
                <div className="search-books-results">
                    
                <ol className="books-grid">
                        {showingBooks.map(item => (
                            <li key={item.id}>                 
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${item.imageLinks.smallThumbnail}")` }}></div>
                                        <div className="book-shelf-changer">
                                            <select value={item.shelf} >
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
            </div>
        );
    }
}

export default NewBook;