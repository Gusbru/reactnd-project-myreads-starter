import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NewBook.css';

class NewBook extends Component {

    updateQuery = (inputText) => {
        console.log(inputText);
    }

    render(){
        return(
            <div>
                <div className="search-books-bar">
                    <Link 
                        className="close-search" 
                        to="/"
                    >Back</Link>
                    <form>
                        <input 
                            type="text"
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default NewBook;