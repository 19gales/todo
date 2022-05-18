import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const mapStateToProps = (state) => {
  const props = {
    text: state.todo,
  };
  return props;
};

let id = 0;
const prefix = (prefix = 'id')=> {
  id++;
  return `${prefix}${id}`;
}

const actionCreators = {
  updateTodoText: actions.updateTodoText,
  addTodo: actions.addTodo,
};

const TodoInput = (props)=>{

  const handleaddTodo = (e) => {
    e.preventDefault();
    const { addTodo, text } = props;
    if (text.length === 0) {
      return null;
    }
    const todo = { text, id: prefix() };
    addTodo({ todo });
  };

  const handleupdateTodoText = (e) => {
    const { updateTodoText } = props;
    updateTodoText({ todo: e.target.value });
  };

  return (
    <form onSubmit={handleaddTodo}>
        <input
          type="text"
          value={props.text}
        onChange={handleupdateTodoText}
        />
    </form>
  );

}

export default connect(mapStateToProps, actionCreators)(TodoInput);
