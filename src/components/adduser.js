import React, { Component } from 'react';
import createReactClass from 'create-react-class';
import '../app.css';

var AddUser = createReactClass({

    getInitialState: function () {
        return {
            firstName: '',
            lastName: '',
            hobby: '',
            age: ''
        }
    },

    onFirstNameChanged: function (event){
        console.log(this.state);
        this.setState ({firstName: event.target.value})
    },

    onLastNameChanged: function (event) {
        console.log(this.state);
        this.setState({ lastName: event.target.value })
    },

    onHobbyChanged: function (event) {
        console.log(this.state);
        this.setState({ hobby: event.target.value })
    },

    onAgeChanged: function (event) {
        console.log(this.state);
        this.setState({ age: event.target.value })
    },

    onAddUserClicked: function(){
        console.log('onAddUserClicked', this.state);
        this.props.onAddUserClicked(this.state) //what is the end parenthesis doing
    },

    render: function(){
        return(
            <form className='AddUser'>
                <label className='FirstName'>
                    First Name
                        <input type='text' value={this.state.firstName} onChange={this.onFirstNameChanged} />
                </label>
                <label className='LastName'>
                    Last Name
                        <input type='text' value={this.state.lastName} onChange={this.onLastNameChanged} />
                </label>
                <label className='Hobby'>
                    Hobby
                        <input type='text' value={this.state.hobby} onChange={this.onHobbyChanged} />
                </label>
                <label className='Age'>
                    Age
                        <input type='text' value={this.state.age} onChange={this.onAgeChanged} />
                </label>
                <button onClick={this.onAddUserClicked}>Add</button>
            </form>
        );
    }

});

    export default AddUser;