// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: false, errorMsg:""}

  successSubmit = () => {
    const {history} = this.props
    history.replace('/')
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  toSubmit = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    console.log(options)

    const response = await fetch(url, options)
    const data = await response.json()

    console.log(data)
    if (data.status_code === 400) {
      this.setState({error: true,errorMsg:data.error_msg})
    } else {
      this.successSubmit()
    }
  }

  render() {
    const {username, password, error,errorMsg} = this.state
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
              value={username}
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
          {error && <p className="error">{errorMsg}</p>}
        </form>
       
      </div>
    )
  }
}
export default LoginForm
