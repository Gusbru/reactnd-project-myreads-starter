import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
  changeStatus(e) {
    const value = e.target.value;
    console.log(value);
  }

    render() {
        return (
          <div>
            <div key={this.props.title} className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>
                  <div className="book-shelf-changer">
                    <form onChange={this.changeStatus}>
                      <select name="status">
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </form>
                  </div>
              </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">Mark Twain</div>
            </div>
          </div>
        )
    }
}

export default Book;