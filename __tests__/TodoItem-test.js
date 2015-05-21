jest.dontMock('classnames');
jest.dontMock('../app/components/TodoItem.js');
jest.dontMock('../app/components/TodoList.js');

describe('Todo Item Test', function() {

  var React;
  var TestUtils;
  var ReactTestUtils;
  var TodoItem;
  var TodoList;

  beforeEach(function(){
    React = require('react/addons');
    TodoItem = require('../app/components/TodoItem.js');
    TodoList = require('../app/components/TodoList.js');
    TestUtils = React.addons.TestUtils;
  });

  it('An unselect todo item', function() {
    var todoId = 1, todoName = "TodoName";
    var Item = TestUtils.renderIntoDocument(
      <TodoItem id={todoId}
                selected={false}
                onClick={TodoList.handleItemClick}>{todoName}</TodoItem>
    );
    expect(Item).not.toBe(null);
    expect(Item.props.id).toEqual(todoId);
    expect(Item.props.selected).toEqual(false);
    expect(Item.props.onClick).toEqual(TodoList.handleItemClick);
    expect(Item.props.children).toEqual(todoName);

    var liElm = TestUtils.findRenderedDOMComponentWithTag(Item, 'li');
    expect(liElm).not.toBe(null);

    var liDOM = liElm.getDOMNode();
    expect(liDOM.childNodes.length).toEqual(1);
    expect(liDOM.textContent).toEqual(todoName);
    expect(liDOM.className).toEqual("list-group-item");

  });

  it('A selected todo item', function() {
    var todoId = 1, todoName = "TodoName";
    var Item = TestUtils.renderIntoDocument(
      <TodoItem id={todoId}
                selected={true}
                onClick={TodoList.handleItemClick}>{todoName}</TodoItem>
    );
    expect(Item).not.toBe(null);
    expect(Item.props.selected).toEqual(true);

    var liElm = TestUtils.findRenderedDOMComponentWithTag(Item, 'li');
    expect(liElm).not.toBe(null);

    var liDOM = liElm.getDOMNode();
    expect(liDOM.className).toEqual("list-group-item active");
  });

  it('Todo item click', function(){
    TodoList.handleItemClick = jest.genMockFunction();
    var todoId = 1, todoName = "TodoName";
    var Item = TestUtils.renderIntoDocument(
      <TodoItem id={todoId}
                selected={false}
                onClick={TodoList.handleItemClick}>{todoName}</TodoItem>
    );

    var liElm = TestUtils.findRenderedDOMComponentWithTag(Item, 'li');
    TestUtils.Simulate.click(liElm);
    expect(TodoList.handleItemClick).toBeCalled();
    expect(TodoList.handleItemClick.mock.calls.length).toBe(1);
  });
});
