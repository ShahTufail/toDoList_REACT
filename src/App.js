import React, { Component} from 'react';
// import logo from './logo.svg';
import Todos from './components/Todos';
// import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        title: 'Take out the trash',
        id: 1,
        commpleted: false
      },
      {
        title: 'Meeting with boss',
        id: 2,
        commpleted: false
      },
      {
        title: 'Meet the boss',
        id: 3,
        commpleted: false
      }

    ]
  }
  render() {
    // console.log(this.state.todos)
    return (
      <div>
        <header className="App-header">
        <Todos todos={this.state.todos} />

          <a className='footer'
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  };
}

export default App;

  // <img src={logo} className="App-logo" alt="logo" />
  // <p>
  //   Edit <code>src/App.js</code> and save to reload.
  // </p>
