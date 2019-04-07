import React, { Component } from 'react';
import Infolist from './Infolist'
import AddInfo from './AddInfo'
import './App.css';

class App extends Component {

  state = {
    info: [
      { name: "Mefala", age: 30, belt: 'black', id: 1 },
      { name: "Boetia", age: 20, belt: 'green', id: 2 },
      { name: "Kratos", age: 25, belt: 'brown', id: 3 }
    ]
  }

  render() {
    return (
      <div className="App">
        Welcome
        <Infolist info={this.state.info}/>
        <AddInfo />
      </div>
    );
  }
}

export default App;
