import React, { Component } from 'react'
import App from './App'

export default class Login extends Component {
    state = {
        loggedIn: false,
        username: '',
        password: '',
        message: '',
    }

    fetchLogin = (e) => {
        e.preventDefault()
        const url = `/api/login`
        const body = {
            username: this.state.username,
            password: this.state.password,
        }
        fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)})
            .then(res => res.json())
            .then(({ message, ok, token }) => {
                if(ok) {
                    console.log('Login ok!')
                    window.localStorage.setItem('token', token)
                    this.setState({ 
                        message: '',
                        loggedIn: true,
                    })
                } else {
                    this.setState({ message })
                }
            })
            .catch(e => {
                console.error(e)
                this.setState({ loggedIn: false })
            })
    }

    updateState = (stateProp) => (e) => {
        this.setState({
            [stateProp]: e.target.value
        })
    }

    render() {
        const { loggedIn, username, password, message } = this.state;
        return loggedIn ? (<App />) : (
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={this.fetchLogin}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" value={username} onChange={this.updateState('username')} />
                    </div>
                    <div className="form-group">
                        <label>password</label>
                        <input type="password" value={password} onChange={this.updateState('password')} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" />
                    </div>
                </form>
                <div className="error-message">{message}</div>
            </div>
        )
    }
}