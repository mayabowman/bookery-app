import React from 'react'

class BrowseBooks extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.books)
    return (
      <div>
        <h1>Browse Books Here</h1>
        <h2>{this.props.books}</h2>
      </div>
    )
  }
}

export default BrowseBooks

