import {
    ADD_TODO, DELETE_TODO, STRIKE_TODO,
    SHOW_ALL_TODO, SHOW_ACTIVE_TODO, SHOW_COMPLETED_TODO,
    SEARCH_TODO, EDIT_TODO, CLEAR_TODO, MODIFIED_TODO,
    UNDO_ACTIVITY, REDO_ACTIVITY
} from './types';

const initialState = {
    todoList: [],
    todoView: [],
    searchTodo: '',
    editTodo: {},
    todoHistory: []
}
export const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            {
                const todoList = [...state.todoList, {
                    id: action.id,
                    text: action.text,
                    completed: action.completed
                }];
                const todoView = [...state.todoView, {
                    id: action.id,
                    text: action.text,
                    completed: action.completed
                }];
                const { todoHistory } = state;
                todoHistory.push({
                    action
                })
                return {
                    ...state,
                    todoList,
                    todoView,
                }
            }
        case STRIKE_TODO:
            {
                const { todoList, todoView } = state;
                let array = [...todoList];
                let array1 = [...todoView];
                array[action.id].completed = action.data[action.id].completed;
                array1[action.id].completed = action.data[action.id].completed;
                return {
                    ...state,
                    todoList: array,
                    todoView: array1
                }
            }
        case DELETE_TODO:
            {
                let { todoList, todoView } = state;
                let delList = todoList.filter(item => item.id !== action.id)
                let delView = todoView.filter(item => item.id !== action.id)

                for (let i = 0; i < delList.length; i++) {
                    if (i !== delList[i].id) {
                        delList[i].id = i;
                    }
                }
                for (let j = 0; j < delView.length; j++) {
                    if (j !== delView[j].id) {
                        delView[j].id = j;
                    }
                }
                return {
                    ...state,
                    todoList: delList,
                    todoView: delView
                }
            }
        case SHOW_ALL_TODO:
            {
                let { todoList, todoView } = state;
                todoView = todoList;
                return {
                    ...state,
                    todoView
                }
            }
        case SHOW_ACTIVE_TODO:
            {
                let { todoList, todoView } = state;
                todoView = todoList.filter((item) => !item.completed);
                return {
                    ...state,
                    todoView
                }
            }
        case SHOW_COMPLETED_TODO:
            {
                let { todoList, todoView } = state;
                todoView = todoList.filter((item) => item.completed);
                return {
                    ...state,
                    todoView
                }
            }
        case SEARCH_TODO: {
            return {
                ...state,
                searchTodo: action.text
            }
        }
        case EDIT_TODO: {
            return {
                ...state,
                editTodo: action
            }
        }
        case CLEAR_TODO: {
            const { editTodo } = state;
            editTodo.fromEdit = action.fromEdit
            return {
                ...state,
                editTodo
            }
        }
        case MODIFIED_TODO: {
            let { todoList, todoView } = state;
            let listArray = [...todoList]
            let viewArray = [...todoView]
            listArray[action.id].text = action.modifiedTodo;
            viewArray[action.id].text = action.modifiedTodo;
            return {
                ...state,
                todoList: listArray,
                todoView: viewArray
            }
        }
        case UNDO_ACTIVITY: {
            return {

            }
        }
        case REDO_ACTIVITY: {
            return {

            }
        }
        default:
            return state;
    }
}
