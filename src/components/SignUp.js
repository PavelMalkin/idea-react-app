import React, {Component} from 'react';
import { connect } from 'react-redux';

import { signUpUser } from '../redux/actions/userActions'


class SignUp extends Component {
    state = {
        username: '',
        password: ''
    };

    handleChange = e =>{
        this.setState({[e.target.id]: e.target.value})
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.signUpUser(this.state, this.props.history);
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
                <p>{this.props.registrationError}</p>
                <button type="submit">Sign Up</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    registrationError: state.user.registrationError
});

const mapDispatchToProps = {
    signUpUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
