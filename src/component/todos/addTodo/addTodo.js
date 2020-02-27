import React from 'react';
import { connect } from 'react-redux';
import { addTodo, searchTodo, clearTodo, modifyTodo } from '../redux/todoAction';

class AddTodo extends React.Component {

    state = {
        inputValue: '',
        searchinput: '',
    }

    onInputChange(enter, event) {
        if (enter) {
            this.setState({
                searchinput: event.target.value,
            })
            this.props.searchTodo(event.target.value);
        } else {
            this.setState({
                inputValue: event.target.value,
            })
        }
    }

    handleSubmit(event) {
        let check = true;
        event.preventDefault();
        const { todoList, editTodo } = this.props;
        const { data = {}, modifyFlag } = editTodo;
        if (todoList.length === 0) {
            this.props.addTodo(this.state.inputValue);
        } else {
            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i].text === this.state.inputValue) {
                    check = false
                    alert('your entered activity already added');
                    break;
                }
            }
            if (modifyFlag) {
                this.props.modifyTodo(this.state.inputValue, data.id);
            } else if (check && todoList.length !== 0) {
                this.props.addTodo(this.state.inputValue);
            }
        }
        // console.log('handleSubmit', input, input.value)  //for ref
        this.setState({
            inputValue: '',
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`prevProps:  ${prevProps} , prevState: ${prevState} `);
        const { fromEdit, data = {} } = this.props.editTodo;
        const { text = '' } = data;
        if (fromEdit) {
            this.setState({
                inputValue: text,
            })
            this.props.clearTodo(false)
        }
    }

    render() {
        //let input;
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    {/* <input ref={node => { input = node }} placeholder="write something....!" /> */}
                    <input type='text' value={this.state.inputValue} onChange={this.onInputChange.bind(this, false)} placeholder="write something....!" />
                    <button type="submit">Add Todo</button> <br /> <br />
                    <input type="text" value={this.state.searchinput} onChange={this.onInputChange.bind(this, true)} placeholder="search activity...." /> <br /> <br />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { todos } = state
    const { todoList, editTodo } = todos;
    return {
        todoList,
        editTodo
    }
}

export default connect(mapStateToProps, { addTodo, searchTodo, clearTodo, modifyTodo })(AddTodo);