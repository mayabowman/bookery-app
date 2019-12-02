import React from 'react'
import ReactDOM from 'react-dom'
import Bookshelf from './Bookshelf'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Bookshelf />, div)
  ReactDOM.unmountComponentAtNode(div)
})