import React, { Component } from 'react';
// import './style/login.css'
// import logo from './image/logo.png'
import { Link } from "react-router-dom";
// import AuthService from './authService'

class Join extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameError: false,
            passwordError: false,
            Error: false
        };
    }
    handleUsername(e) {
        this.setState({ username: e.target.value })
    }
    handlePassword(e) {
        this.setState({ password: e.target.value })
    }
    login(e, clientId, clientSecret) {
        e.preventDefault();
        if (clientId.length === 0) {
            this.setState({ passwordError: false })
            this.setState({ usernameError: true })
            this.setState({ Error: false })
            return 0;
        } else if (clientSecret.length === 0) {
            this.setState({ passwordError: true })
            this.setState({ usernameError: false })
            this.setState({ Error: false })
            return 0;
        }
        let url = 'https://staging.seerbitapigateway.com/cgw_bc/api/v1/auth';
        let param = {
            clientId,
            clientSecret
        };
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(param),
        }
        fetch(url, options)
            .then((response) => response.json())
            .then(result => {
                console.log(result.access_token)
                if (result.access_token === undefined) {
                    console.log("Invalid Username or Password")
                    this.setState({ passwordError: false })
                    this.setState({ usernameError: false })
                    this.setState({ Error: true })
                } else {
                    alert("Login Successful !")
                    this.setState({ passwordError: false })
                    this.setState({ usernameError: false })
                    this.setState({ Error: false })
                    // AuthService.setToken(result.access_token)
                    this.props.history.push("/home")
                }
                return result;
            })
            .catch(err => {
                throw err;
            });
    }

render() {
    return (
        <div className="wrap" onMouseMove={(e) => {
            this.setState({ passwordError: false })
            this.setState({ usernameError: false })
            this.setState({ Error: false })
        }}>
            {/* <img src={logo} className="logo" /> */}
            <form action="" method="POST" className='text-center' onSubmit={(e) => { this.login(e, this.state.username, this.state.password) }}>
                {/* <label for='phoneNumber'></label> --> */}
                <input name='phoneNumber' id="phoneNumber" type="tel" placeholder="Phone Number"
                    onChange={this.handleUsername.bind(this)}
                    value={this.state.username}
                />
                <div className="errwrap">
                    <span className={this.state.usernameError ? 'error' : "error hide"}>Enter Username.</span>
                </div>

                {/* <label for='pssword'>Pssword:</label> */}
                <input name='password' id='password' type="password" placeholder="Password"
                    onChange={this.handlePassword.bind(this)}
                    value={this.state.password}
                />
                <div className="errwrap">
                    <span className={this.state.passwordError ? 'error' : "error hide"}>Enter Password.</span>
                </div>

                <button type="submit" name="login" >Login To Your Account</button>
                <div className="errwrap">
                    <span className={this.state.Error ? 'error' : "error hide"}>Invalid Username or Password</span>
                </div>
                <Link className='forget' to='#' >Forgot your Password?</Link>
                <Link to='CreateAcct'> <button type="button" name="Create" className="create"> CREATE AN ACCOUNT</button></Link>

            </form>
        </div>
    );
}
}

export default Join;