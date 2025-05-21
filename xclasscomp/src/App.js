import React, { Component } from "react";
import "./App.css";

class CounterApp extends Component {
  state = { count: 0 };

  increment = () => this.setState(prev => ({ count: prev.count + 1 }));
  decrement = () => this.setState(prev => ({ count: prev.count - 1 }));

  render() {
    const { count } = this.state;

    return (
      <div className="frame">
        <div className="canvas">
          <h1>Counter App</h1>
          <p>Count: {count}</p>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default CounterApp;