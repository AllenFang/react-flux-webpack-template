import dispatcher from "../dispatcher/Dispatcher";
import constants from "../Constant/Constants";
import events from "events";
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

var TodoStore = assign({}, events.EventEmitter.prototype, {
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

dispatcher.register(function(action){
	switch(action.type){
		case constants.LOAD_TODO:
      _todoLoading();
      TodoStore.emitChange();
			break;
		case constants.LOAD_TODO_SUCCESS:
      _todoLoadSuccess(action.todos);
      TodoStore.emitChange();
			break;
    case constants.ADD_TODO_SUCCESS:
      _todoAddSuccess(action.todos);
      TodoStore.emitChange();
      break;
    case constants.LOAD_TODO_ERROR:
      _todoLoadError(action.error);
      TodoStore.emitChange();
			break;
		default:
	}
});

export default TodoStore;
