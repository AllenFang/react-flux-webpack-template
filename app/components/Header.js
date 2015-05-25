import React from "react";
import TodoAction from "../action/TodoAction";

class Header extends React.Component{

  handleAddBtnClick(e){
    var todoName = this.refs.todoName.getDOMNode().value;
    TodoAction.addTodo(todoName);
  }

  render(){
    return(
      <div>
        <div className="alert alert-success" role="alert">{this.props.msg}</div>
        <div>
          <input ref="todoName" type="text" placeholder="New Todo Name" />
          <button className="btn btn-primary" onClick={(e) => this.handleAddBtnClick(e)}>Add</button>
        </div>
        <br/>
      </div>
    );
  }
}
Header.propTypes = {
  msg: React.PropTypes.string
};
Header.defaultProps = {
  msg: null
};
export default Header;
