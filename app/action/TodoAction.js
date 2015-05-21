import dispatcher from "../dispatcher/Dispatcher";
import constants from "../Constant/Constants";
import TodoWebAPI from "../utils/TodoWebAPI";

export default {
  getTodoList: function(){
    dispatcher.dispatch({
      type: constants.LOAD_TODO
    });

    TodoWebAPI.getAllTodos((json) => {
      dispatcher.dispatch({
        type: constants.LOAD_TODO_SUCCESS,
        todos: json
      });
    }, (error) => {
      dispatcher.dispatch({
        type: constants.LOAD_TODO_ERROR,
        error: error
      });
    });
  },

  addTodo: function(todoName){
    TodoWebAPI.addTodo(todoName, (json) => {
      dispatcher.dispatch({
        type: constants.ADD_TODO_SUCCESS,
        todos: json
      });
    }, (error) => {
      dispatcher.dispatch({
        type: constants.LOAD_TODO_ERROR,
        error: error
      });
    });
  }
}
