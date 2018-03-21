import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import createReactClass from 'create-react-class';
import data from './data.js';
import _ from 'lodash';

var App = createReactClass({

  getInitialState: function() {
    return {
      users: data
    }
  },

  renderUsers: function(){
    return _.map(this.state.users, (user) => {
      return (
        <li key={user._id}>
            <div>
              {user.firstName}
            </div>
            <div>
              {user.lastName}
            </div>
            <div>
              {user.hobby}
            </div>
            <div>
              {user.age}
            </div>
        </li>
      );
    })
      
  },

  render: function() {
    console.log(data);
    return (
      <div className="App">

        {this.renderUsers()}
        

      </div>
    );
  }
})

/* class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
} */

export default App;
