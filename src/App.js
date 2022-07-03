import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLink from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particle from './Components/Particle/Particle';
import './App.css'

window.process = {
  env: {
      NODE_ENV: 'development'
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particle />
        <Navigation />
         <Logo />
         <Rank />
        <ImageLink />
    {/*<FaceRecognition />*/}
    </div>
    );
  }
}

export default App;
