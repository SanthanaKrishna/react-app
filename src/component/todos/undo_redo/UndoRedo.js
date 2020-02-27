import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { undoTodo, redoTodo } from '../../../action/todoAction';

class UndoRedo extends React.Component {
    handleUndo = () => {
        this.props.undoTodo();
    }

    handleRedo = () => {
        this.props.redoTodo();
    }
    componentDidUpdate = () => {

    }

    render() {
        return (
            <div>
                <button onClick={this.handleUndo}>undo</button> &nbsp;
                <button onClick={this.handleRedo}>redo</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        undoTodo: bindActionCreators(undoTodo, dispatch),
        redoTodo: bindActionCreators(redoTodo, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(UndoRedo);