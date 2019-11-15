import React from 'react'
import Book from '../Book/Book'

class BrowseBooks extends React.Component {
  
  render() {
    console.log("browse book props", this.props)
    
    return (
      <div>
        <h1>Browse Books Here</h1>
        <Book books={this.props.books} />
      </div>
    )
  }
}

export default BrowseBooks

