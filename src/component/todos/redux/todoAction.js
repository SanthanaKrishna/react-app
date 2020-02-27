import {
    ADD_TODO, DELETE_TODO, STRIKE_TODO,
    SHOW_ALL_TODO, SHOW_ACTIVE_TODO, SHOW_COMPLETED_TODO,
    SEARCH_TODO, EDIT_TODO, CLEAR_TODO, MODIFIED_TODO,
    HISTORY_TODO, UNDO_ACTIVITY, REDO_ACTIVITY
} from './types';

let nextTodoId = 0;
let currentIndex = 0;
export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text,
    completed: false
})

export const completedTodo = (data, id) => ({
    type: STRIKE_TODO,
    data,
    id
})

export const deletTodo = (id) => ({
    type: DELETE_TODO,
    id
})

export const showAllTodo = () => ({
    type: SHOW_ALL_TODO,
})

export const showActiveTodos = () => {
    return {
        type: SHOW_ACTIVE_TODO,
    }
}

export const completedTodos = () => ({
    type: SHOW_COMPLETED_TODO,

})

export const searchTodo = (text) => ({
    type: SEARCH_TODO,
    text
})

export const editTodo = (data, index, fromEdit) => ({
    type: EDIT_TODO,
    data,
    index,
    fromEdit,
    modifyFlag: true
})

export const clearTodo = (fromEdit) => ({
    type: CLEAR_TODO,
    fromEdit
})

export const modifyTodo = (modifiedTodo, id) => ({
    type: MODIFIED_TODO,
    modifiedTodo,
    id
})

export const todoHistory = (historyTodos) => ({
    type: HISTORY_TODO,
    historyTodos,
    currentIndex: currentIndex++,
})

export const undoTodo = () => ({
    type: UNDO_ACTIVITY
})

export const redoTodo = () => ({
    type: REDO_ACTIVITY

})