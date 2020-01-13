import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import BrowseBooks from '../BrowseBooks/BrowseBooks';
import Bookshelf from '../Bookshelf/Bookshelf';
import ReviewForm from '../ReviewForm/ReviewForm';
import BookshelfApiService from '../services/bookshelf-api-service';
import AppContext from '../contexts/AppContext';
import config from '../config';
import './App.css';
import Nav from '../Nav/Nav';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      bookshelf: [],
      error: null,
      sideDrawerOpen: false,
    }
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this)
    this.handleRemoveBook = this.handleRemoveBook.bind(this)
  }

  static contextType = AppContext;

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/books`)
      .then((booksRes) => {
        if (!booksRes.ok) {
          throw new Error(booksRes.statusText)
        }
        return booksRes.json()
      })
      .then(data => {
        this.setState({
          books: data,
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get books at this time.'
        })
      })
  };

  handleAddToBookshelf = (id) => {
    this.setState({
      bookshelf: !this.state.bookshelf.includes(id)
                  ? [...this.state.bookshelf, id]
                  : this.state.bookshelf
    })
    if (!this.state.bookshelf.includes(id)) {
      BookshelfApiService.postBookshelfItem(id, 'dummy text', '3')
        .then((data) =>{
          if (id !== data.book_id) {
            this.setState({
              bookshelf: [...this.state.bookshelf, data.book_id]
            })
          }
        })
        .catch(err => {
          console.log('error', err)
        })
    }
    if (this.state.bookshelf.includes(id)) {
      alert('This is already on your bookshelf!')
    }
  };

  handleRemoveBook = (id) => {
    BookshelfApiService.deleteBookshelfItem(id)
    let array = [...this.state.bookshelf]
    let updatedBookshelf = array.filter(bookshelfItem => {
      return bookshelfItem.id !== id
    })
    this.setState({ bookshelf: updatedBookshelf })
  };

  render() {
    const contextValue = {
      handleAddToBookshelf: this.handleAddToBookshelf,
      books: this.state.books,
      bookshelf: this.state.bookshelf
    };

    let { books } = this.state;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    };

    return (
      <AppContext.Provider value={contextValue}>
        <main className="App" style={{height: '100%' }}>
          <Nav drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer
            show={this.state.sideDrawerOpen}
            toggle={this.drawerToggleClickHandler}
          />
          {backdrop}
          <Switch>
            <>
              <div className='content' aria-live='polite'>
                <Route
                  exact
                  path='/'
                  component={LandingPage}
                />
                <Route
                  exact
                  path='/signup'
                  component={SignUp}
                />
                <Route
                  exact
                  path='/login'
                  component={LogIn}
                />
                <Route
                  path='/browsebooks'
                  render={() => (
                    <BrowseBooks
                      books={this.state.books}
                      bookshelf={this.state.bookshelf}
                    />
                  )}
                />
                <Route
                  path='/bookshelf'
                  render={() => (
                    <Bookshelf
                      books={books}
                      bookshelf={this.state.bookshelf}
                      handleRemoveBook={this.handleRemoveBook}
                    />
                  )}
                />
                <Route
                  exact
                  path='/reviewform'
                  component={ReviewForm}
                />
              </div>
            </>
          </Switch>
        </main>
      </AppContext.Provider>
    )
  }
}

export default App;























// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import LandingPage from '../LandingPage/LandingPage';
// import SignUp from '../SignUp/SignUp';
// import LogIn from '../LogIn/LogIn';
// import BrowseBooks from '../BrowseBooks/BrowseBooks';
// import Bookshelf from '../Bookshelf/Bookshelf';
// import ReviewForm from '../ReviewForm/ReviewForm';
// import BookshelfApiService from '../services/bookshelf-api-service';
// import AppContext from '../contexts/AppContext';
// import config from '../config';
// import './App.css';
// import Nav from '../Nav/Nav';
// import SideDrawer from '../SideDrawer/SideDrawer';
// import Backdrop from '../Backdrop/Backdrop';

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       books: [],
//       bookshelf: [],
//       error: null,
//       sideDrawerOpen: false,
//     }
//     this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this)
//   }

//   static contextType = AppContext;

//   drawerToggleClickHandler = () => {
//     this.setState((prevState) => {
//       return {sideDrawerOpen: !prevState.sideDrawerOpen}
//     })
//   };

//   backdropClickHandler = () => {
//     this.setState({ sideDrawerOpen: false })
//   };

//   componentDidMount() {
//     fetch(`${config.API_ENDPOINT}/books`)
//       .then((booksRes) => {
//         if (!booksRes.ok) {
//           throw new Error(booksRes.statusText)
//         }
//         return booksRes.json()
//       })
//       .then(data => {
//         this.setState({
//           books: data,
//           error: null
//         })
//       })
//       .catch(err => {
//         this.setState({
//           error: 'Sorry, could not get books at this time.'
//         })
//       })
//   };

//   handleAddToBookshelf = (id) => {
//     this.setState({
//       bookshelf: !this.state.bookshelf.includes(id)
//                   ? [...this.state.bookshelf, id]
//                   : this.state.bookshelf
//     })
//     if (!this.state.bookshelf.includes(id)) {
//       BookshelfApiService.postBookshelfItem(id, 'dummy text', '3')
//         .then((data) =>{
//           if (id !== data.book_id) {
//             this.setState({
//               bookshelf: [...this.state.bookshelf, data.book_id]
//             })
//           }
//         })
//         .catch(err => {
//           console.log('error', err)
//         })
//     }
//     if (this.state.bookshelf.includes(id)) {
//       alert('This is already on your bookshelf!')
//     }
//   };

//   render() {
//     const contextValue = {
//       handleAddToBookshelf: this.handleAddToBookshelf,
//       books: this.state.books,
//       bookshelf: this.state.bookshelf
//     };

//     let { books } = this.state;
//     let backdrop;

//     if (this.state.sideDrawerOpen) {
//       backdrop = <Backdrop click={this.backdropClickHandler}/>
//     };

//     return (
//       <AppContext.Provider value={contextValue}>
//         <main className="App" style={{height: '100%' }}>
//           <Nav drawerClickHandler={this.drawerToggleClickHandler}/>
//           <SideDrawer
//             show={this.state.sideDrawerOpen}
//             toggle={this.drawerToggleClickHandler}
//           />
//           {backdrop}
//           <Switch>
//             <>
//               <div className='content' aria-live='polite'>
//                 <Route
//                   exact
//                   path='/'
//                   component={LandingPage}
//                 />
//                 <Route
//                   exact
//                   path='/signup'
//                   component={SignUp}
//                 />
//                 <Route
//                   exact
//                   path='/login'
//                   component={LogIn}
//                 />
//                 <Route
//                   path='/browsebooks'
//                   render={() => (
//                     <BrowseBooks
//                       books={this.state.books}
//                       bookshelf={this.state.bookshelf}
//                     />
//                   )}
//                 />
//                 <Route
//                   path='/bookshelf'
//                   render={() => (
//                     <Bookshelf
//                       books={books}
//                       bookshelf={this.state.bookshelf}
//                       handleRemoveBook={this.handleRemoveBook}
//                     />
//                   )}
//                 />
//                 <Route
//                   exact
//                   path='/reviewform'
//                   component={ReviewForm}
//                 />
//               </div>
//             </>
//           </Switch>
//         </main>
//       </AppContext.Provider>
//     )
//   }
// }

// export default App;
