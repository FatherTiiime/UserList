import React, { Component } from 'react';
import createReactClass from 'create-react-class';
import Users from './data.js';
import _ from 'lodash';
import AddUser from './components/adduser';
import './app.css';

var App = createReactClass({

  getInitialState: function() {
    return {
      users: Users
    }
  },

//users vs user - is the ;ater what is being passed back from the adduser component?

  onAddUserClicked: function(newUser) {
    this.state.users.push(newUser)

    this.setState({
      users: this.state.users,
    })
  },

  renderUsers: function(){
    return _.map(this.state.users, (users) => {
      return (
        <tr key={users._id}>
{/*           I have questions about the key={...} is doing - https://www.menubar.io/reactjs-tables/ & https://reactjs.org/docs/lists-and-keys.html
 */}      <td className='FirstName'>{users.firstName}</td> 
          <td className='LastName'>{users.lastName}</td>
          <td className='Hobby'>{users.hobby}</td>
          <td className='Age'>{users.age}</td>
        </tr>
      );
    })
  },

  render: function() {
    return (
      
      <div className="App">

        <AddUser 
          onAddUserClicked={this.onAddUserClicked}
        />
        
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
