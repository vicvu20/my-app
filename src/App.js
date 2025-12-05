import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./HelloWorld";
import Counter from "./Counter";
import FilteredList from "./FilteredList";

const produce = [
  { name: "Apple", type: "Fruit" },
  { name: "Pineapple", type: "Fruit" },
  { name: "Banana", type: "Fruit" },
  { name: "Pear", type: "Fruit" },
  { name: "Strawberry", type: "Fruit" },
  { name: "Orange", type: "Fruit" },
  { name: "Lettuce", type: "Vegetable" },
  { name: "Cucumber", type: "Vegetable" },
  { name: "Eggplant", type: "Vegetable" },
  { name: "Squash", type: "Vegetable" },
  { name: "Bell pepper", type: "Vegetable" },
  { name: "Onion", type: "Vegetable" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>CW 08 – React</h1>
          <p>Components, props, state, events, and filtering.</p>
        </header>
        <main className="content">
          <section className="card"><HelloWorld name="Victor Vu" /></section>
          <section className="card"><h2>Counter</h2><Counter /></section>
          <section className="card">
            <h2>Produce Filter</h2>
            <FilteredList items={produce} />
          </section>
        </main>
        <footer className="footer"><p>Web Pro 25 · CW 08 React</p></footer>
      </div>
    );
  }
}

export default App;