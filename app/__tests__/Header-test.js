jest.dontMock('../components/Header.js');

describe('Todo Header Test', function() {

  var React;
  var TestUtils;
  var ReactTestUtils;
  var Header;
  var TodoAction;

  beforeEach(function(){
    React = require('react/addons');
    Header = require('../components/Header.js');
    TodoAction = require('../action/TodoAction.js');
    TestUtils = React.addons.TestUtils;
  });

  it('A Header test', function() {

    var msg = "This is a header test";

    var header = TestUtils.renderIntoDocument(
      <Header msg={msg}/>
    );
    expect(header).not.toBe(null);
    expect(header.props.msg).toEqual(msg);

    var alertElm = TestUtils.findRenderedDOMComponentWithClass(header, 'alert');
    expect(alertElm).not.toBe(null);

    var alertDiv = alertElm.getDOMNode();
    expect(alertDiv.childNodes.length).toEqual(1);
    expect(alertDiv.textContent).toEqual(msg);

    var inputElm = TestUtils.findRenderedDOMComponentWithTag(header, 'input');
    expect(inputElm).not.toBe(null);

    var btnElm = TestUtils.findRenderedDOMComponentWithTag(header, 'button');
    expect(btnElm).not.toBe(null);
    var btnDOM = btnElm.getDOMNode();
    expect(btnDOM.textContent).toEqual("Add");
  });

  it('Add button click', function(){
    var header = TestUtils.renderIntoDocument(
      <Header msg={null}/>
    );

    // header.handleAddBtnClick = jest.genMockFunction();

    var inputElm = TestUtils.findRenderedDOMComponentWithTag(header, 'input');
    var btnElm = TestUtils.findRenderedDOMComponentWithTag(header, 'button');
    var inputDOM = inputElm.getDOMNode();
    inputDOM.value = "New Todo Item";

    TestUtils.Simulate.click(btnElm);
    // expect(header.handleAddBtnClick).toBeCalled();
    // expect(header.handleAddBtnClick.mock.calls.length).toBe(1);
    expect(TodoAction.addTodo).toBeCalled();
  });

});
