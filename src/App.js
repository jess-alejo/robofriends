import React, { Fragment } from "react"

import CardList from "./CardList"
import SearchField from "./SearchField"
import { robots } from "./robots"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: "",
    }
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value })
    console.log(this.state.searchField, event.target.value)
  }

  render() {
    let filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchField onSearchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    )
  }
}
