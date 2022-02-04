import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Welcome from './components/welcome';
class App extends Component {
render () {
  return (
    <div className="App" >
      <Hello name="Simou" id="Dudu" > this is a children </Hello>
      <Hello name="ibt" id="Dudu">
        <button>click..</button>
      </Hello>
      <Hello name="World" id="Dudu" />
      <Welcome id="Dudu" />
    </div>
    
  );
}
}

export default App;
