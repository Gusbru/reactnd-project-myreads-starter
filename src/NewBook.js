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
        //let alreadyHaveBooks;
        if(inputText.length > 0) {
            this.props.search(inputText, 20)
            .then(function(item){
                if(item.length > 0) {
                    self.setState({
                        query: item
                    });
                }
                item.map((searchedItems) => (
                    self.props.myCurrentBooks.map((myBooks) => (
                        console.log(myBooks.id === searchedItems.id ? "ja tenho " + myBooks.id : "nao tenho")
                        //changeStatus(myBooks.id === searchedItems.id ? myBooks.)
                    ))
                ))
                // alreadyHaveBooks.map(_ => (
                //     console.log("Ja tenho o livro " + _.id + " " + _.title)
                // ))
            })
            .catch(function(error){
                console.log(error);
            });
        } else {
            self.setState({
                query: []
            })
        }
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