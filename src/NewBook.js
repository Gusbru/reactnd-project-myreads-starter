import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import './NewBook.css';

class NewBook extends Component {

    state = {
        query: []
    };

    

    updateQuery = (inputText) => {
        const self = this;
        this.props.search(inputText, 20)
        .then(function(item){
            if(item.length > 0) {
                self.setState({
                    query: item
                });
            }
        })
        .catch(function(error){
            console.log(error);
        });
    };

    

    render(){
        let showingBooks = this.state.query;
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