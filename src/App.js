import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasks = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks
    };
  };

  addTask = (e) => {
    e.preventDefault();
    
    const newTask = {
      name: "",
      completed: false,
      id: Date.now()
    };

    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    });
  };

  toggleTask = (taskId) => {
    
    console.log('toggling item', taskId);

    this.setState({
      ...this.state,
      tasks: this.state.tasks.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  clearCompleted = (e) => {

    e.preventDefault();

    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter((task) => !task.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} />
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
