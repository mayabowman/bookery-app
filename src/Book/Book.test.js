import React from 'react'
import ReactDOM from 'react-dom'
import Book from './Book'

it('renders without crashing', () => {
  const book = {
      "id": "1",
      "title": "Extremely Loud and Incredibly Close",
      "author": "Jonathan Safran Foer",
      "description": "Description 1"
    }

  const div = document.createElement('div')
  ReactDOM.render(<Book book={book}/>, div)
  ReactDOM.unmountComponentAtNode(div)
})