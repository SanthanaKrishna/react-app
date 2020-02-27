import React from 'react';
import AddTodo from './addTodo/addTodo';
import TodoList from './todoList/todoList';
import FilterOptions from './todoFilter/filterOptions';
import UndoRedo from './undo_redo/UndoRedo';
// import '../index.css'
class TododApp extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="col-6">
          <h1>Todo App</h1><br />
          <AddTodo /> <br />
          <TodoList /> <br />
          <UndoRedo /> <br />
          <FilterOptions />
        </div>
      </div>
    )
  }
}

export default TododApp;
