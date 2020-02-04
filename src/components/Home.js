import React, {Component} from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import { getData  } from '../redux/actions/userActions'


class Home extends Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {

        const { user ,data, getData} = this.props;

        if (! user.isLoggedIn){
            this.props.history.push('/login');
        }

        let cards = 'No data';
        if (data.length) {
           cards = data.map( res =>
            <div key={res.id} className="cards">
                <div>User Name is: {res.username}</div>
                <div>Was created at: {res.created}</div>
                <div>User ID is: {res.id}</div>
                <div>Ideas? :{res.ideas}</div>
                <div>Book marks: {res.bookmarks}</div>
            </div>
            )
        }

       // console.log('data const is',data);

        return (
            <div>
                {cards}
                <button onClick={() => getData()}>Grab Data</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    data: state.data.data
});

// const mapDispatchToProps = (dispatch) => {
//    return {
//        getData: () => {
//            axios.get('http://localhost:4000/api/users')
//            .then( res => (
//                dispatch({type: 'GET_DATA' , payload: res.data})
//        ) );
//
//        },
//        dropData: () => dispatch({type: 'DROP_DATA'})
//    }
// };

const mapDispatchToProps = {
    getData
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
