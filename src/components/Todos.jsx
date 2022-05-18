import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const mapStateToProps = (state) => {
  const { byId, allIds } = state.todos;
  const todos = allIds.map((id) => byId[id]);
  return { todos };
};

const actionCreators = {
  removeTodo: actions.removeTodo,
};

const Todos = (props) => {
  const { todos } = props;
  
  const handleRemoveTodo = (id) => () => {
    const { removeTodo } = props;
    removeTodo({ id });
  };

  return (
    <div>
      <ul>
        {todos.map(({ id, text }) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={handleRemoveTodo(id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default connect(mapStateToProps, actionCreators)(Todos);
