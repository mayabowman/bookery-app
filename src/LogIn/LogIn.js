import React from 'react'

class LogIn extends React.Component {
  render() {
    return (
      <section>
        <form id='log-in'>
          <div className='username-login'>
            <label for='username-login'>Email: </label>
            <input type='email' name='email' required />
          </div>
          <div className='password-login'>
            <label for='password-login'>Password: </label>
            <input type='password' name='password' required />
          </div>
          <div>
            <button type='submit'>
              Log In
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default LogIn