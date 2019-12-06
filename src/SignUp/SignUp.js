import React from 'react'
import AuthApiService from '../services/auth-api-service'
import './SignUp.css'


class SignUp extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    }
  }

  state = { error: null }

  handleRegistrationSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/browsebooks'
    history.push(destination)
  }

  handleSubmit = e => {
    e.preventDefault()
    const { first_name, last_name, email, password } = e.target

    console.log('registration form submitted')
    console.log({ first_name, last_name, email, password })

    this.setState({ error: null })
    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      user_email: email.value,
      password: password.value
    })
      .then(user => {
        first_name.value = ''
        last_name.value = ''
        email.value = ''
        password.value = ''
        this.handleRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    return (
      <div>
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='first_name'>First Name</label>
            <input
              type='text'
              name='first_name'
              id='first_name'
              placeholder='First Name'
            />
          </div>
          <div>
            <label htmlFor='last_name'>Last Name</label>
            <input
              type='text'
              name='last_name'
              id='last_name'
              placeholder='Last Name'
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
             <input
              type='text'
              name='email'
              id='email'
              placeholder='Email'
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
            />
          </div>
          <button type='submit'>
            Sign Up
          </button>
        </form>
        <div className='error-message'>
          {this.state.error}
        </div>
      </div>
    )
  }
}

export default SignUp