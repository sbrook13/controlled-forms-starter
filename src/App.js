import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
class App extends Component {

  state = {
    todos: [
      {title: "First Todo", content: "My First Todo!"},
      {title: "Second Todo", content: "My Second Todo!"},
      {title: "Third Todo", content: "My Third Todo!"},
    ]
  }

  showTodos = () => this.state.todos.map(todo => <TodoItem key={todo.title} todo={todo}/>)

  render(){
    return (
      <div className="App">
      <ul>{this.showTodos()}</ul>      
      </div>
    );
  }
}

export default App;
