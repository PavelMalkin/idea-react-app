import React, {Component} from 'react';
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import store from '../redux/store'
import axios from 'axios'

class Navbar extends Component {
    state = {};

    handleLogOut = () => {
        delete axios.defaults.headers.common['Authorization'];
        localStorage.removeItem('FBToken');
        store.dispatch({type: 'USER_LOGOUT'});
        store.dispatch({type:'DROP_DATA'});
        this.props.history.push('/login');
    };

    userInfo = () => {

    };

    render() {
      //  console.log('props in Navbar is', this.props.user);

           const links = this.props.user.logined ? (
               <ul className="Navbar">
                   <li><Link to='/'>Home</Link></li>
                   <li className="user" onClick={this.userInfo}><Link>Hi, {this.props.user.username}</Link></li>
                   <li className="user" onClick={this.handleLogOut}><Link>Log Out</Link></li>
               </ul>

        ) : (
            <ul className="Navbar">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Log In</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
            </ul>
        );

        return (
            <div>
          {links}
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    user: state.user
});


export default connect(mapStateToProps)(withRouter(Navbar));
