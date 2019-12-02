import React from 'react'
import ReactDOM from 'react-dom'
import BrowseBooks from './BrowseBooks'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowseBooks />, div)
  ReactDOM.unmountComponentAtNode(div)
})