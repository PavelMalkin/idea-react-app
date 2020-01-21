import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

class LogIn extends Component {
    state = {
        username: '',
        password: ''
    };

    handleChange = e =>{
      this.setState({[e.target.id]: e.target.value})
    };

    handleSubmit = e => {
        e.preventDefault();
        const userData = this.state;
        //console.log('history in login', this.props);

        axios.post('http://localhost:4000/login', userData)
            .then( res => {
                console.log('axios user login data',res.data);
                const FBToken = 'Bearer '+ res.data.token;
                this.props.login(userData, this.props.history, FBToken);
                axios.defaults.headers.common['Authorization'] = FBToken;
                localStorage.setItem('FBToken', FBToken);
                this.props.history.push('/')

            })
            .catch(err => (console.log(err.data)))

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>User name </label>
                <input type="text" id="username" onChange={this.handleChange}/>
                <br/>
                <label>Password </label>
                <input type="password" id='password' onChange={this.handleChange}/>
                <br/>
                <button type="submit">Log In</button>

            </form>
        );
    }
}

    const mapDispatchToProps = (dispatch) => {
    return {
     login: (userData, history, FBToken) => dispatch({type: 'USER_LOGIN', userData, history, FBToken})
 }
};

export default connect(null, mapDispatchToProps)(LogIn);
