import dispatcher from "../dispatcher/Dispatcher";
import {TODO} from "../Constant/Constants";
import {EventEmitter} from 'events';
import assign from "object-assign";

var CHANGE_EVENT = 'change';

var _state = {
  todos:[],
  msg: null
};

function _todoLoading(){
  _state.msg = "Todo loading...";
}

function _todoLoadSuccess(todos){
  _state.msg = "Todo loading success...";
  _state.todos = todos;
}

function _todoLoadError(error){
  _state.msg = "Todo loading error...";
}

function _todoAddSuccess(todos){
  _state.msg = "Todo Add success...";
  _state.todos = todos;
}

function _todoAddByEmptyName(){
  _state.msg = "Todo name should not be empty.";
}

var TodoStore = assign({}, EventEmitter.prototype, {
  getState: function(){
		return _state;
	},

	emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
	}
});

dispatcher.register((action) => {
	switch(action.type){
		case TODO.LOAD_TODO:
      _todoLoading();
      TodoStore.emitChange();
			break;
		case TODO.LOAD_TODO_SUCCESS:
      _todoLoadSuccess(action.todos);
      TodoStore.emitChange();
			break;
    case TODO.ADD_TODO_SUCCESS:
      _todoAddSuccess(action.todos);
      TodoStore.emitChange();
      break;
    case TODO.LOAD_TODO_ERROR:
      _todoLoadError(action.error);
      TodoStore.emitChange();
			break;
    case TODO.TODO_EMPTY_ERROR:
      _todoAddByEmptyName();
      TodoStore.emitChange();
		default:
	}
});

export default TodoStore;
