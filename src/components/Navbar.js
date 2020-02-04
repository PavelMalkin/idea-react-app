import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom"; //Navlink
import { connect } from 'react-redux'

import { logOutUser } from '../redux/actions/userActions'

class Navbar extends Component {
    state = {};

    handleLogOut = () => {
        this.props.logOutUser();
        this.props.history.push('/login');
    };

    userInfo = () => {

    };

    render() {
      //  console.log('props in Navbar is', this.props.user);

           const links = this.props.user.isLoggedIn ? (
               <ul className="Navbar">
                   <li><Link to='/'>Home</Link></li>
                   <li className="user" onClick={this.userInfo}><Link to='/user'>Hi, {this.props.user.username}</Link></li>
                   <li className="user" onClick={this.handleLogOut}><Link to='/login'>Log Out</Link></li>
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

const mapDispatchToProps = {
    logOutUser
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
