import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import './NewBook.css';

class NewBook extends Component {

    state = {
        queryResult: []
    };

    

    updateQuery = (inputText) => {
        const self = this;
        if(inputText.length > 0) {
            this.props.search(inputText, 20)
            .then(result => {
                self.setState({
                    queryResult: result.map(item => {
                        const myBook = this.props.myCurrentBooks.find(book => book.id === item.id)
                        if (myBook) {
                            item.shelf = myBook.shelf
                        } else {
                            item.shelf = 'none'
                        }

                        return item;
                    })
                })
            })
            .catch(error => {
                self.setState({
                    queryResult: []
                });
            });
        } else {
            self.setState({
                queryResult: []
            })
        }
    };

    

    render(){
        let showingBooks = this.state.queryResult;
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
                <Book 
                    currentBooks={showingBooks} 
                    changeStatus={this.props.changeStatus}/>
                </div>
            </div>
        );
    }
}

export default NewBook;