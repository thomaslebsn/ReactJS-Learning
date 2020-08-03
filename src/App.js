import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    users: [
      {username : "Thomas", fullname: "Thomas Le"},
      {username : "Johnson", fullname: "Johnson Tran"},
      {username : "Rocky", fullname: "Rocky Milan"},
      {username : "Cena", fullname: "Cena John"}
    ],
    teamName: 'Super Man'
  };  

  currentUsernameState = "";

  mouseOverUserHandler = (event) => {
    const element = event.target; 
    const rowIndex = element.dataset.rowIndex;
    element.classList.add('highlightText');
    this.currentUsernameState = this.state.users[rowIndex].username;
    let items = [...this.state.users];
    let item = {...items[rowIndex]};
    item.username = this.currentUsernameState.concat(" (Active) ^'^");
    items[rowIndex] = item;
    this.setState({users: items});
  }

  mouseOutUserHandler = (event) => {
    const element = event.target; 
    const rowIndex = element.dataset.rowIndex;
    element.classList.remove('highlightText');
    let items = [...this.state.users];
    let item = {...items[rowIndex]};
    item.username = this.currentUsernameState;
    items[rowIndex] = item;
    this.setState({users: items});
  }

  switchFullNameHandler = (randomFullName) => {
     console.log(randomFullName);
     this.setState({users: [
      {username : "Thomas", fullname: randomFullName },
      {username : "Johnson", fullname: randomFullName },
      {username : "Rocky", fullname: randomFullName },
      {username : "Cena", fullname: randomFullName }
    ]}); 
  };

  inputChangedHandler = (event) => {
      this.setState({
        teamName: event.target.value
      });
  };

  render () {
    return (
      <div className="App">
        <h1> Section 3 - Base Syntax - Time to Practise</h1>
        <p>This is really working!</p>
        <button className="button" onClick={() => this.switchFullNameHandler("Pinky Tran")}>Switch FullName</button>
        <p>Change fullname for all users by enterring the value into the below input</p>
        <UserInput teamName={this.state.teamName} changedEvent={this.inputChangedHandler} />
        <UserOutput 
          username={this.state.users[0].username} 
          fullname={this.state.users[0].fullname} 
          teamName={this.state.teamName}
          rowIndex="0"  
          fullNameClicked={this.switchFullNameHandler.bind(this,'Thomas Le')}
          mouseOverEvent={this.mouseOverUserHandler} 
          mouseOutEvent={this.mouseOutUserHandler} />
        <UserOutput 
          username={this.state.users[1].username} 
          fullname={this.state.users[1].fullname} 
          teamName={this.state.teamName}
          rowIndex="1"  
          fullNameClicked={this.switchFullNameHandler.bind(this,'Johnson Tran')}
          mouseOverEvent={this.mouseOverUserHandler} 
          mouseOutEvent={this.mouseOutUserHandler} />
        <UserOutput 
          username={this.state.users[2].username} 
          fullname={this.state.users[2].fullname} 
          teamName={this.state.teamName}
          rowIndex="2"  
          fullNameClicked={this.switchFullNameHandler.bind(this,'Rocky Milan')}
          mouseOverEvent={this.mouseOverUserHandler} 
          mouseOutEvent={this.mouseOutUserHandler} />
        <UserOutput 
          username={this.state.users[3].username} 
          fullname={this.state.users[3].fullname} 
          teamName={this.state.teamName}
          rowIndex="3"  
          fullNameClicked={this.switchFullNameHandler.bind(this,'Cena Jonh')}
          mouseOverEvent={this.mouseOverUserHandler} 
          mouseOutEvent={this.mouseOutUserHandler} />
      </div>
    )
  }
}

export default App;
