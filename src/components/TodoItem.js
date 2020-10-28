import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#434956",
      padding: "10px",
      borderBottom: "1px dotted #ccc",

      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const {id, title, completed} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <span style={{paddingRight: '5px'}}><input style={{width: '15px', height: '15px'}} type="checkbox" checked={completed} onChange={this.props.markComplete.bind(this, id)} /></span>

          {title}

          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
        </p>
      </div>
    );
  }
}

// Proptypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: 'red',
  color: 'white',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
  textAlign: 'center'
}

export default TodoItem;
