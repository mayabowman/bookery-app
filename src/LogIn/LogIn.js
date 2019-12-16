import React from 'react'
import TokenService from '../services/token-service'
import AuthApiService from '../services/auth-api-service'
import './LogIn.css'

class LogIn extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    }
  }

  state = { error: null }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/browsebooks'
    history.push(destination)
  }

  handleSubmitJwtAuth = e => {
    e.preventDefault()
    this.setState({ error: null })
    const { email, password } = e.target
    AuthApiService.postLogin({
      user_email: email.value,
      password: password.value
    })
      .then(res => {

        email.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        TokenService.saveUserId(res.userId)
        this.handleLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    return (
      <div className='login-form'>
        <form
          id='log-in'
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div className='username-login'>
            <label htmlFor='username-login'>Email Address</label>
            <input type='email' name='email' required />
          </div>
          <div className='password-login'>
            <label htmlFor='password-login'>Password</label>
            <input type='password' name='password' required />
          </div>
          <div>
            <button type='submit'>
              Log In
            </button>
          </div>
        </form>
        <div className='error-message'>
          {this.state.error}
        </div>
      </div>
    )
  }
}

export default LogIn