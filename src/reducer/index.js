import { combineReducers } from 'redux';
import { todos } from '../component/todos/redux/todoReducer';

export const rootReducers = combineReducers({
    todos,
})