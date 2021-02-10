import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import JokeRender from './components/JokeRender.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "",
      apiDataLoaded: false
    }
  }

  async componentDidMount () {
    this.refreshJoke();
  }

  refreshJoke = async () => {
    const joke = await axios.get('https://icanhazdadjoke.com/', {
      headers: {
          Accept: 'application/json'
      }
    })
    this.setState({
      joke: joke.data,
    })
  }


  render() {
    console.log("console log!!");
    console.log(this.state.joke);
    return (
      <div className="App">
        <JokeRender joke = {this.state.joke} refreshJoke = {this.refreshJoke}/>

      </div>
    );
  }
}

export default App;
