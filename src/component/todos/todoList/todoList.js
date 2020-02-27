import React from 'react';
import { deletTodo, completedTodo, editTodo } from '../../../action/todoAction';
import { connect } from 'react-redux';
import ListItem from './listItems';

class TodoList extends React.Component {
    state = {
        todoState: [], updateFlag: false
    }

    todoCompleted = (id) => {
        const { todoView = [] } = this.props;
        todoView[id].completed = !todoView[id].completed;
        this.props.completedTodo(todoView, id)
    }

    handleDeleteTodo = (event, activity) => {
        event.stopPropagation();
        this.props.deletTodo(activity.id)
    }

    handleEditTodo = (event, activity, id, fromEdit) => {
        event.stopPropagation();
        this.props.editTodo(activity, id, fromEdit);
    }

    render() {
        const { todoView = [], searchTodo } = this.props;
        let todoListElement = todoView.filter((element) => {
            return element.text.toLowerCase().includes(searchTodo.toLowerCase());
            //return data.text.indexOf(searchTodo) !== -1;
        })
        return (
            <div>
                {
                    todoListElement && todoListElement.map((activity, index) =>
                        <ListItem
                            keys={index}
                            activity={activity}
                            todoCompleted={this.todoCompleted}
                            handleDeleteTodo={this.handleDeleteTodo}
                            handleEditTodo={this.handleEditTodo}
                        />
                    )
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { todos } = state
    const { todoView, searchTodo, editTodo } = todos;
    return {
        todoView,
        searchTodo,
        editTodo
    }
}

export default connect(mapStateToProps, { deletTodo, completedTodo, editTodo })(TodoList);
