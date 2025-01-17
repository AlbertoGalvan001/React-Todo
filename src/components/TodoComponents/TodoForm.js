import React from 'react';

class TodoForm extends React.Component {


    constructor() {
        super();
        this.state = {
            newItem: '',
        };
    }

    handleChanges = e => {
        this.setState({
            newItem: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Handle submit worked");

        this.props.addItem(this.state.newItem);
        this.setState({ newItem: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='item'>New Task</label>
                <input
                    type='text'
                    task='item'
                    id='item'
                    value={this.state.newItem}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>

        );
    }

}


export default TodoForm;