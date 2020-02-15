import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getData, updateIdea, deleteIdea  } from '../redux/actions/dataActions'
import Buttons from "./Buttons";
import moment from 'moment'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {updatedIdeaID: '',
            idea: null,
            description: null
        };

        this.handleInput = this.handleInput.bind(this);
    };

    componentDidMount() {
        this.props.getData()
    }

    handleDelete = (id) => {
        this.props.deleteIdea(id);
    };

    handleChange= e => {
        this.setState({[e.target.id]: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();

        let idea = {
            idea: this.state.idea,
            description: this.state.description
        };
        this.props.updateIdea(this.state.updatedIdeaID, idea);
        this.setState({
            updatedIdeaID: null
        });
    };


    handleInput = (id) => {
        let idea = this.props.ideas.find( res => res.id === id);
        this.setState({
            updatedIdeaID: id,
            idea: idea.idea,
            description: idea.description
        });
    };

    handleUpdateCancel = () => {
      this.setState({
          updatedIdeaID: null
      })
    };

    render() {

        const { user, getData, ideas} = this.props;
        let cards = 'No data';


        if (ideas.length) {
           cards = ideas.map( res => {

               if (this.state.updatedIdeaID === res.id) {
                   return (
                   <div className='idea'  key={res.id}>
                       <form onSubmit={this.handleSubmit}>
                           <span>Idea</span>
                           <input type="text" id="idea" onChange={this.handleChange} value={this.state.idea} />
                           <span>Content</span>
                           <textarea className='idea-field' id="description" onChange={this.handleChange} value={this.state.description}/>
                           <button>Post!</button>
                       </form>
                       <button onClick={this.handleUpdateCancel}>Cancel</button>
                   </div>)
               } else {
                   return (
                       <div key={res.id} className="cards">
                           <h3>IDEA : {res.idea}</h3>
                           <p>{res.description}</p>
                           <small>Created at: {moment(res.createdDate).format('DD/MMM/YY HH:MM')} by {res.author.username}</small>
                           <br/>
                           <small>{(res.createdDate === res.updated) ? null : (
                               `Updated at: ` + moment(res.updated).format('DD/MMM/YY HH:MM')
                           )}

                           </small>
                           {(user.isLoggedIn && user.username === res.author.username) ?
                               <Buttons id={res.id} handleInput={this.handleInput} handleDelete={this.handleDelete}/>
                               : null}
                       </div>
                   )
               }
           })
        }

        return (
            <div>
                {cards}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    ideas: state.data.ideas
});

const mapDispatchToProps = {
    getData,
    updateIdea,
    deleteIdea
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
