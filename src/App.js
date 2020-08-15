import React, { Component } from 'react';
import AddTask from './components/add-todo';
import TodoUI from './components/todo-ui'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos:[]
    }
  }

  

  addTodo = (newTask) => {
    newTask.id = Math.floor(Math.random() * 1000);
    if (newTask.id !== this.state.todos.id) {
      // console.log(newTask.id);
      let newTodos = [...this.state.todos, newTask];
      this.setState({
        todos: newTodos
      })
      console.log(newTodos);
    }
    else {
      return null
    }
  }

  deleteTask = () => {
    // console.log(id)
    // preventDefault();
    const taskLeft = this.state.todos.filter(todo => {
      return todo.checked !== true;
    });
    this.setState({
      todos: taskLeft
    })
    // console.log(filterTodo);
    // let newDeleteTodo = [];

  }

  changeChecked = (delTask) => {
    if (delTask.checked === false) {
      delTask.checked = true;
    }
    else {
      delTask.checked = false;
    }


    if (this.state.todos.id === delTask) {
      let newTodos = [ ...this.state.todos, delTask]
      this.setState({
        todos : newTodos
      })
    }
    console.log(this.state.todos);
  }
 
  // this not working yet
  checkAll = () => {
   let allSelection = this.state.todos.map((todo, key) => {
      if (this.state.todos.id === todo.id) {
        // if (todo.checked === false) {
          todo.checked = true;
          key = todo.id
        // }
        // else {
        //   todo.checked = false;
        // }
        // console.log(this.state.todo);
      }
    })
console.log(allSelection);
    // let allTask = [ ...this.state.todos, allSelection]
    // this.setState({
    //   todos : allTask
    // })
    // console.log(this.state.todos);
  }

  render() {
    return (
      <div className="App">
        <h2 className="" id="task-header">
          Task Scheduler
        </h2>
        <AddTask addTodo={this.addTodo}/>
        <TodoUI
          todos={this.state.todos}
          deleteTask={this.deleteTask}
          changeChecked={this.changeChecked}
          checkAll={this.checkAll}
        />
      </div>
    );
  }
}


export default App;
