import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';

const mapStateToProps = () => {
  const props = {};
  return props;
};

let id = 0;
const prefix = (prefix = 'id')=> {
  id++;
  return `${prefix}${id}`;
}

const actionCreators = {
  addTodo: actions.addTodo,
};

const TodoInput = (props)=>{

  const handleaddTodo = (values) => {
    const { addTodo, reset } = props;
    const todo = { ...values, id: prefix(), state: 'active' };
    addTodo({ todo });
    reset();
  }

  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(handleaddTodo)}>
      <Field name="text" required component="input" type="text" />
      <input type="submit" value="Add" />
    </form>
  );

}

const ConnectedTodoInput = connect(mapStateToProps, actionCreators)(TodoInput);

export default reduxForm({
  form: 'TodoInput',
})(ConnectedTodoInput);
