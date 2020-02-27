import React from 'react';
import { connect } from 'react-redux';
import { showAllTodo, showActiveTodos, completedTodos } from '../../../action/todoAction';


class FilterOptions extends React.Component {

    visiblityTodos = (filterTodos) => {
        if (filterTodos === 'showAllTodos') {
            this.props.showAllTodo();
        } else if (filterTodos === 'showActiveTodos') {
            this.props.showActiveTodos();
        } else if (filterTodos === 'showCompletedTodos') {
            this.props.completedTodos();
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.visiblityTodos('showAllTodos')}>All</button> &nbsp;
                <button onClick={() => this.visiblityTodos('showActiveTodos')}>Active</button> &nbsp;
                <button onClick={() => this.visiblityTodos('showCompletedTodos')}>Completed</button>
            </div>
        )
    }
}


export default connect(null, { showAllTodo, showActiveTodos, completedTodos })(FilterOptions);