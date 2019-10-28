import React from 'react';
import ReactDom from 'react-dom';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }

];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: data
    };
  }

  ///class methods to update state
  addItem = name => {
    //update task state with new task
    const newItem = {
      task: name,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  filterCompleted = () => { };

  toggleCompleted = id => {

    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })

    });

  };

  render() {
    return (

      <div className='App'>
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          toggleCompleted={this.toggleCompleted}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
