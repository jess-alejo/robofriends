import React, { Fragment } from "react"

import CardList from "../components/CardList"
import SearchField from "../components/SearchField"
import Scroll from "../components/Scroll"
import "./App.css"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: "",
    }
  }

  render() {
    const { robots, searchField } = this.state
    let filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="tc">
        <h1 className="page-title">RoboFriends</h1>
        <SearchField onSearchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    )
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users"
    fetch(url)
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value })
  }
}
