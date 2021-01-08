import React, { Component } from "react";
import Container from "./components/Container";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Container active={true} counterType="counter" />
          </div>
          <div className="col-6">
            <Container active={false} counterType="reverseCounter" />
          </div>
        </div>
        <Modal />
      </div>
    );
  }
}

export default App;
