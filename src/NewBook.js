import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NewBook.css';

class NewBook extends Component {

    updateQuery = (inputText) => {
        let searchResult = this.props.search(inputText, 20);
        searchResult
        .then(function(result){
            result.map((item)=>(
                console.log(item.title)
            ))
        })
        .catch(function(error){
            console.log(error);
        });
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
                <div className="search-books-results">
                    
                </div>
            </div>
        );
    }
}

export default NewBook;