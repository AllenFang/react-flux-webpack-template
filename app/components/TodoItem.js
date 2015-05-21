'use strict'

import React from "react";
import classSet from 'classnames';

class TodoItem extends React.Component{

  handleItemClick(e){
    this.props.onClick(this.props.id);
  }

  render(){
    let liClasses = classSet("list-group-item", {
      'active': this.props.selected
    });

    return(
      <li className={liClasses} onClick={(e) => this.handleItemClick(e)}>{this.props.children}</li>
    )
  }
}

TodoItem.propTypes = {
  id: React.PropTypes.number,
  selected: React.PropTypes.bool,
  onClick: React.PropTypes.func
}
export default TodoItem;
