import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index.js';

const todos = handleActions({
  [actions.addTodo](state, { payload: { todo } }) {
    const { byId, allIds } = state;
    return {
      byId: { ...byId, [todo.id]: todo },
      allIds: [todo.id, ...allIds],
    }; 
  }, 
  [actions.removeTodo](state, { payload: { id } }) {
    const { byId, allIds } = state;
    const byIdWitoutId = Object.assign({}, byId);
    delete byIdWitoutId[id];
    return {
      byId: byIdWitoutId,
      allIds: allIds.filter(function (value) {
        return value !== id;
      })
    };
  },
}, { byId: {}, allIds: [], });

const todo = handleActions({
  [actions.addTodo]() {
    return '';
  },
  [actions.updateTodoText]( state, { payload }) {
    return payload.todo;
  },
}, '');

export default combineReducers({
  todos,
  todo,
});
