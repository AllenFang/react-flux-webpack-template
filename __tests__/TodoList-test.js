jest.dontMock('classnames');
jest.dontMock('../app/components/TodoItem.js');
jest.dontMock('../app/components/TodoList.js');

describe('Todo List Test', function() {

  var React;
  var TestUtils;
  var ReactTestUtils;
  var TodoItem;
  var TodoList;
  var todos;
  beforeEach(function(){
    React = require('react/addons');
    TodoItem = require('../app/components/TodoItem.js');
    TodoList = require('../app/components/TodoList.js');
    TestUtils = React.addons.TestUtils;

    todos = [
      {id: 1, name: "todo1"},
      {id: 2, name: "todo2"},
      {id: 3, name: "todo3"},
      {id: 4, name: "todo4"}
    ];
  });

  it('An unselect todo item', function() {
    var List = TestUtils.renderIntoDocument(
      <TodoList todos={todos}/>
    );

    expect(List).not.toBe(null);
    expect(List.state.currSelectItem).toBe(null);
    expect(List.props.todos.length).toEqual(todos.length);

    var ulElm = TestUtils.findRenderedDOMComponentWithTag(List, 'ul');
    expect(ulElm).not.toBe(null);

    var liDOM = ulElm.getDOMNode();
    expect(liDOM.childNodes.length).toEqual(4);
  });

  it('A todo item be selected', function() {
    var List = TestUtils.renderIntoDocument(
      <TodoList todos={todos}/>
    );

    List.handleItemClick(todos[0].id);
    expect(List.state.currSelectItem).toEqual(todos[0].id);
  });
});
