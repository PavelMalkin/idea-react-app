import React, {Component} from 'react';
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'

class Navbar extends Component {

    render() {

        console.log('props is', this.props.user);
        const links = this.props.user.logined ? (
            <ul className="Navbar">
                <li><Link to='/'>Home</Link></li>
            <li className="user">Hi, {this.props.user.username}</li>
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

const mapStateToProps = (state) => (
    {user: state}
);


export default connect(mapStateToProps)(withRouter(Navbar));
