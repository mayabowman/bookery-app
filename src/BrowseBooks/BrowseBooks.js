import React from 'react'

class BrowseBooks extends React.Component {
  render() {
    return (
      <div>
        <h1>Browse Books Here</h1>
        <ul>{this.props.books}</ul>
      </div>
    )
  }
}

export default BrowseBooks

