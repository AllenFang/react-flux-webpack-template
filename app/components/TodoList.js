import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component{

  constructor(props) {
		super(props);
    this.state = {
      currSelectItem: null
    };
  }

  render(){
    let todoElm = this.props.todos.map(function(todo, i){
      return(<TodoItem key={i}
                       id={todo.id}
                       selected={todo.id == this.state.currSelectItem}
                       onClick={(e) => this.handleItemClick(e)}>{todo.name}</TodoItem>);
    }, this);
    return(
      <ul className="list-group">
        {todoElm}
      </ul>
    );
  }

  handleItemClick(todoId){
    this.setState({
      currSelectItem: todoId
    });
  }
}
TodoList.propTypes = {
  todos: React.PropTypes.array
};
export default TodoList;
