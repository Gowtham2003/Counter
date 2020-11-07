import React, { Component } from "react";

export class Counter extends Component {
  render() {
    return (
      <div className="container">
        <span className={this.getBadgeClasses()}>{this.getCount()}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses = () => {
    let className = "badge badge-";
    className += this.props.counter.value === 0 ? "warning" : "primary";
    return className;
  };

  getCount = () => {
    let count = this.props.counter.value;
    count = this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
    return count;
  };
}

export default Counter;
