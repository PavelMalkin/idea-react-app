import axios from 'axios'

export const getData = () => dispatch => {
    axios.get('http://localhost:4000/api/idea')
        .then( res => {
            dispatch({type:'GET_DATA', payload: res})
        })
        .catch( err => {
            alert(err);
        })




};

export const createIdea = (idea, history) => (dispatch) => {
    console.log('idea', idea);
    axios.post('http://localhost:4000/api/idea/', idea)
        .then(res => {
            console.log('result create idea', res);
            dispatch({type: 'CREATE_IDEA_SUCCESS', payload: res });
            history.push('/');
        })
        .catch(err => {
            alert(err);
        })

};

export const deleteIdea = (idea) => (dispatch) => {


  axios.delete(`http://localhost:4000/api/idea/${idea}`)
      .then( () => {
          dispatch({type: 'DELETE_IDEA', payload: idea})
      })
      .catch(err => {
          console.log('deleteIdea err',err);
      })

};

export const updateIdea = (id, idea) => (dispatch) => {
    console.log('idea',idea);

    axios.put(`http://localhost:4000/api/idea/${id}`,idea)
        .then(res => {
            dispatch(getData());
        })
        .catch( err => {
            console.log('error updateIdea', err);
        })


};
