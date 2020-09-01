import React, { Component} from 'react';
// import logo from './logo.svg';
import Todos from './components/Todos';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import axios from 'axios'
import './App.css';
import About from './components/Pages/About'

class App extends Component {
  state = {
    todos: [
      // {
      //   title: 'Take out the trash',
      //   id: 1,
      //   completed: false
      // },
      // {
      //   title: 'Meeting with boss',
      //   id: 2,
      //   completed: true
      // },
      // {
      //   title: 'Meet the boss',
      //   id: 3,
      //   completed: false
      // }

    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then((res) => {
      this.setState( {
        todos: res.data
      })
    })
  }

  // toggle complete
  toggleCompleted = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (id === todo.id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  // delete todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState( { todos: this.state.todos.filter(todo => {
        return todo.id !== id;
      })}))

  }

  // save new todo item
  saveTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then((res) => {
      this.setState({ todos: [...this.state.todos, res.data]
    })

  })
    }
  render() {
    // console.log(this.state.todos)
    return (
      <Router>
        <div>
          <Header /> {/* header displaying the app className  */}

          <Route exact path='/' render={props => (
            <React.Fragment>
              <AddTodo
                addTodo={this.saveTodo}/>

              <Todos
                todos={this.state.todos}
                toggleCompleted={this.toggleCompleted}
                delTodo={this.delTodo}
              />
            </React.Fragment>
          )} />

          <Route path='/about' component={About} />


            <a className='footer'
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
        </div>
      </Router>

    );
  };
}
export default App;

  // <img src={logo} className="App-logo" alt="logo" />
  // <p>
  //   Edit <code>src/App.js</code> and save to reload.
  // </p>
