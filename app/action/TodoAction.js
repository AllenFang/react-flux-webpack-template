import dispatcher from "../dispatcher/Dispatcher";
import {TODO} from "../Constant/Constants";
import TodoWebAPI from "../utils/TodoWebAPI";

export default {
  getTodoList: function(){
    dispatcher.dispatch({
      type: TODO.LOAD_TODO
    });

    TodoWebAPI.getAllTodos((json) => {
      dispatcher.dispatch({
        type: TODO.LOAD_TODO_SUCCESS,
        todos: json
      });
    }, (error) => {
      dispatcher.dispatch({
        type: TODO.LOAD_TODO_ERROR,
        error: error
      });
    });
  },

  addTodo: function(todoName){

    if(todoName === ""){
      dispatcher.dispatch({
        type: TODO.TODO_EMPTY_ERROR
      });
    } else {
      TodoWebAPI.addTodo(todoName, (json) => {
        dispatcher.dispatch({
          type: TODO.ADD_TODO_SUCCESS,
          todos: json
        });
      }, (error) => {
        dispatcher.dispatch({
          type: TODO.LOAD_TODO_ERROR,
          error: error
        });
      });
    }
  }
}
