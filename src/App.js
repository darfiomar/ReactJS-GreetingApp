import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', items: ['Try again if it doesn t work!']};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    const url = 'https://darfiomar-tpspring.herokuapp.com/api/greeting/' + this.state.value;
    //setTimeout(() => {
       fetch(url)
          .then(res => res.json())
          .then(json => {
            this.setState({
                items: json
            })
          })
          .catch((err) => {
            console.log("Error: "+err.message);
          });
         // waits until the request completes...
    //}, 1500);
    const { items } = this.state;
    console.log(items);
    alert(items.content);    
    event.preventDefault();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            <code>ReactJS</code> Greeting App.
          </h1>
          <form onSubmit={this.handleSubmit}>
          <input className="App-link" type="text" placeholder="Type your name here.." value={this.state.value} onChange={this.handleChange} required />
          <input className="App-link" type="submit" value="Greet Me" />
          </form>
          <p>
            Basicly, after you type your name in and submit, <br></br>
            this reactJS app will send a GET request to <a href="https://darfiomar-tpspring.herokuapp.com/api/greeting/">my Spring endpoint</a>.<br></br>
            and display the response as a javascript alert box. (Also, check the console)
          </p>
        </header>
      </div>
    );
  }
}

export default App;
