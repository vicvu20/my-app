import React, { Component } from "react";

class HelloWorld extends Component {
  render() {
    return (
      <div className="hello-world">
        <h2>Hello, {this.props.name}!</h2>
        <p>Welcome to your first React component.</p>
      </div>
    );
  }
}

export default HelloWorld;