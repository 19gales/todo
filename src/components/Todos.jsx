import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const mapStateToProps = (state) => {
  const { todos: {byId, allIds} } = state;
  const todos = allIds.map((id) => byId[id]);
  return { todos };
};

const actionCreators = {
  removeTodo: actions.removeTodo,
  toggleTodoState: actions.toggleTodoState,
};

const Todos = (props) => {
  
  const handleRemoveTodo = (id) => () => {
    const { removeTodo } = props;
    removeTodo({ id });
  };

  const handleToggleTodoState = (id) => () => {
    const { toggleTodoState } = props;
    toggleTodoState({ id });
  };

  const { todos } = props;

  return (
    <div>
      <ul>
        {todos.map(({ id, text, state }) => (
          <div key={id}>
            <span onClick={handleToggleTodoState(id)}>
              {state === 'active' ? text : <s>{text}</s>}
            </span>
            <button onClick={handleRemoveTodo(id)}>&times;</button>
          </div>
        ))}
      </ul>
    </div>
  );

}

export default connect(mapStateToProps, actionCreators)(Todos);
