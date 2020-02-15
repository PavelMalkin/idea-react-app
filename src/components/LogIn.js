import React, {Component} from 'react';
import {connect} from 'react-redux'
import { loginUser } from '../redux/actions/userActions'


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
        this.props.loginUser(this.state, this.props.history);
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
                <p className="Red">{this.props.loginError}</p>
                <button type="submit">Log In</button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    loginUser
};

const mapStateToProps = (state) => ({
  loginError: state.user.loginError,

});


export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
