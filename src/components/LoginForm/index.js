// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {userName: '', password: '', error: false}

  successSubmit = () => {
    const {history} = this.props
    history.replace('/')
  }

  changeUsername = event => {
    this.setState({userName: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  toSubmit = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    console.log(options)

    const response = await fetch(url, options)
    const data = await response.json()

    console.log(data)
    if (data.status === 404) {
      this.setState({error: true})
    } else {
      this.successSubmit()
    }
  }

  render() {
    const {userName, password, error} = this.state
    return (
      <div className="login">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
          alt="website login"
          className="websiteLogin"
        />
        <form className="formSection" onSubmit={this.toSubmit}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="websiteLogo"
          />
          <div className="labelSection">
            <label htmlFor="input1">UserName</label>
            <input
              value={userName}
              type="text"
              id="input1"
              placeholder="Username"
              onChange={this.changeUsername}
            />
          </div>

          <div className="labelSection">
            <label htmlFor="input2">PassWord</label>
            <input
              value={password}
              type="text"
              id="input2"
              placeholder="Password"
              onChange={this.changePassword}
            />
          </div>
          <button className="logIn" type="submit">
            Login
          </button>
        </form>
        {error && <p className="error">Username and Password didnt match</p>}
      </div>
    )
  }
}
export default LoginForm
