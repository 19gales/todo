import { createAction } from 'redux-actions';

export const addTodo = createAction('ADD_TODO');
export const removeTodo = createAction('REMOVE_TODO');
export const toggleTodoState = createAction('TOGGLE_TODO_STATE');
