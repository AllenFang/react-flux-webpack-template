'use strict'
import React from "react";

import Header from "./Header";
import TodoList from "./TodoList";
import TodoAction from "../action/TodoAction";
import TodoStore from "../store/TodoStore";

class TodoApp extends React.Component{

  constructor(props) {
		super(props);
    this.state = {
      todos: [],
      msg: null
    }
  }

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange.bind(this));
    TodoAction.getTodoList();
	}

	componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange.bind(this));
	}

  render(){
    return(
      <div className="row">
        <div className="col-md-4">
          <Header msg={this.state.msg}/>
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    )
  }

  _onChange(){
		this.setState(TodoStore.getState());
	}
}

export default TodoApp;
