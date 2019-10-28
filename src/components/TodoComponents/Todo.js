import React from 'react';

const ToDo = props => {
    return (
        <div
            className={`item${props.item.completed ? ' completed' : ''}`}
            onClick={() => props.toggleCompleted(props.item.id)}>
            <p>{props.item.name}</p>
        </div>
    );
};

export default ToDo;