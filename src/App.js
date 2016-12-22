import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
          super(props);

          this.handleSubmit = this.handleSubmit.bind(this);

      }

      handleSubmit(event) {

          fetch('https://jxmar3hx36.execute-api.eu-west-1.amazonaws.com/test/rng', {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
              'Content-Type': 'application/json'
            })

          }).then(res => res.text()).then((data)=>{

                this.setState({rng: + data})
                console.log(data);
              
          })
event.preventDefault();
      }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={this.handleSubmit}>
            <input type="submit" value="Submit"/>
        </form>


      </div>
    );
  }
}

export default App;
