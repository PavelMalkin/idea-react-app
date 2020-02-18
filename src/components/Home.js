import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getData  } from '../redux/actions/dataActions'
import NewPost from "./cards/NewPost";
import Post from "./cards/Post";
import Comment from "./cards/Comment"


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedIdeaID: '',
            idea: null,
            description: null
        };
        // this.handleInput = this.handleInput.bind(this);
    };

    componentDidMount() {
        this.props.getData()
    }

    handleSubmit = e => {
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

        const { ideas} = this.props;
        let cards = 'No data';


        if (ideas.length) {
           cards = ideas.map( res => {

               if (this.state.updatedIdeaID === res.id) {
                   return (
                       < NewPost key={res.id}
                                 handleUpdateCancel={this.handleUpdateCancel}
                                 handleSubmit={this.handleSubmit}
                                 idea={this.state}
                       />
                   );
               } else {
                   return (
                    <Post key={res.id}
                          idea={res}
                          handleInput={this.handleInput}
                    />
                   )}
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
    getData
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
