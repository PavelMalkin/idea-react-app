import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios'


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
      const userData = this.state;

      axios.post('http://localhost:4000/register', userData)
          .then( res => {
              console.log('res registration form', res.data);
              let FBToken = 'Bearer ' + res.data.token;
              this.props.signUp(userData, FBToken);
              axios.defaults.headers.common['Authorization'] = FBToken;
              this.props.history.push('/');
          })
          .catch(err => {
              console.log('Error data is', err.data);
          })

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
                <button type="submit">Sign Up</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return{
      signUp: (userData, FBToken) => dispatch({type:'USER_LOGIN', userData, FBToken})
  }
};

export default connect(null,mapDispatchToProps)(SignUp);
