import React, { Component } from "react";
import List from "./List";
import { DropdownButton, Dropdown } from "react-bootstrap";

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "", type: "All" };
  }

  onSearchChange = (event) => this.setState({ search: event.target.value });
  onFilterChange = (type) => this.setState({ type });

  matchesSearch = (item) => {
    const text = this.state.search.toLowerCase();
    return text === "" || item.name.toLowerCase().includes(text);
  };

  matchesType = (item) => this.state.type === "All" || item.type === this.state.type;

  getFilteredItems = () => this.props.items.filter(
    (item) => this.matchesSearch(item) && this.matchesType(item)
  );

  render() {
    return (
      <div className="filtered-list">
        <div className="controls">
          <input
            type="text"
            className="search-input"
            placeholder="Search produce..."
            value={this.state.search}
            onChange={this.onSearchChange}
          />
          <DropdownButton id="type-filter" title={this.state.type}>
            <Dropdown.Item onClick={() => this.onFilterChange("All")}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => this.onFilterChange("Fruit")}>Fruit</Dropdown.Item>
            <Dropdown.Item onClick={() => this.onFilterChange("Vegetable")}>Vegetable</Dropdown.Item>
          </DropdownButton>
        </div>
        <List items={this.getFilteredItems()} />
      </div>
    );
  }
}

export default FilteredList;