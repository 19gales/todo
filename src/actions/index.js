import { createAction } from 'redux-actions';

export const addTodo = createAction('ADD_TODO');
export const updateTodoText = createAction('UPDATE_TEXT_TODO');
export const removeTodo = createAction('REMOVE_TODO');
