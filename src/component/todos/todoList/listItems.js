import React from 'react';

const ListItem = (props) => {
    const { activity = {}, todoCompleted, handleEditTodo, handleDeleteTodo, keys } = props;
    return (
        <div>
            <li key={keys} onClick={() => todoCompleted(keys)}>
                {activity.completed ? <strike>{activity.text}</strike> : activity.text} &nbsp;
                <button onClick={(event) => handleDeleteTodo(event, activity)}>Delete</button> &nbsp;
                <button onClick={(event) => handleEditTodo(event, activity, keys, true)}>Edit</button> <br /> <br />
                {/* <button onClick={this.editTodo.bind(this)}>Edit</button> */}
            </li>
        </div>
    )
}

export default ListItem;