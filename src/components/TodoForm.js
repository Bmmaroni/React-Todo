import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            newTask: ''
        };
    }

    changeHandler = (e) => {
        this.setState({
            ...this.state,
            newTask: e.target.value
        });
    };

    submitTask = (e) => {
        e.preventDefault();
        this.props.addTask(e, this.state.newTask);
        this.setState({ newTask: '' });
    }

    render() {
        return (
            <form onSubmit={this.submitTask}>
                <input
                    value={this.state.newTask}
                    onChange={this.changeHandler}
                    type='text'
                    name='todo'
                />
                <button>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        );
    }
}

export default TodoForm;