import React from 'react';
import Smurf from './Smurf';

import { SMURF_VALUE, SMURF_FETCH, API_FETCH_SUCCESS, API_FETCH_FAIL, SMURF_ADD } from './../actions';

 const SmurfList = ()=> {
    const isLoading = false;
    const testSmurf = {
        id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        name:'Poppa Smurf',
        position:'Village Leader',
        nickname: 'Pops',
        description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    class SmurfList extends React.Component {
        state = {
          newSmurf: ''
        };
      
        handleChanges = e => {
          this.setState({ newSmurf: e.target.value });
        };
      
        addSmurf = e => {
          e.preventDefault();
          this.props.addNewFriend(this.state.newSmurf);
          this.setState({newSmurf:""});
        };
      
        toggleSmurf = (e, index) => {
          e.preventDefault();
          this.props.toggleSmurf(index);
        };
      
      
      const mapStateToProps = state => ({
        friends: state.friendsReducer.friends
      });

    return(<div className="listContainer">
        <Smurf smurf={testSmurf}/>
}




export default SmurfList(
    mapStateToProps,
    { addNewSmurf, toggleSmurf }
  )(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.

