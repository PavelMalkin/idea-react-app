import React, {Component} from 'react';
import { connect } from 'react-redux'
import axios from 'axios';


class Home extends Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {

       // console.log("The Props in Home is", this.props.data.data);

        let data = 'No data';
        if (this.props.data.data.length) {
           data = this.props.data.data.map( res =>
            <div key={res.id} className="cards">
                <div>User Name is: {res.username}</div>
                <div>Was created at: {res.created}</div>
                <div>User ID is: {res.id}</div>
                <div>Ideas? :{res.ideas}</div>
                <div>Book marks: {res.bookmarks}</div>
            </div>
            )
        }

        console.log('data const is',data);


        // let data = this.props.user.logined ? (
        //    axios.get('http://localhost:4000/api/users')
        //        .then(res => (res.data)
        //          )
        // ) : (<h2>There is no data</h2>);

        return (
            <div>
                {data}
                <button onClick={() => this.props.getData()}>Grab Data</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state,
    data: state.data
});

const mapDispatchToProps = (dispatch) => {
   return {
       getData: () => {
           axios.get('http://localhost:4000/api/users')
           .then( res => (
               dispatch({type: 'GET_DATA' , payload: res.data})
       ) );

       }
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
