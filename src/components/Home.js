import React, {Component} from 'react';
import { connect } from 'react-redux'
import axios from 'axios';

class Home extends Component {


    render() {
        console.log('Authorization: ',this.props.user.FBToken);

        let data = [];
        if (this.props.user.logined) {
            data = axios.get('http://localhost:4000/api/users')
                .then(res => (res.data)
                )
        }
        // let data = this.props.user.logined ? (
        //    axios.get('http://localhost:4000/api/users')
        //        .then(res => (res.data)
        //          )
        // ) : (<h2>There is no data</h2>);

        return (
            <div>
                {data.map( user => <div key={user.id}>{user.username}</div>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state
});

export default connect(mapStateToProps)(Home);
