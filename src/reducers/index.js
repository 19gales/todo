import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
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
  [actions.toggleTodoState](state, { payload: { id } }) {
    const todo = state.byId[id];
    const newState = todo.state === 'active' ? 'done' : 'active';
    const updatedTodo = { ...todo, state: newState };
    return {
      ...state,
      byId: { ...state.byId, [todo.id]: updatedTodo },
    };
  },
}, { byId: {}, allIds: [], });

export default combineReducers({
  todos,
  form: formReducer,
});
