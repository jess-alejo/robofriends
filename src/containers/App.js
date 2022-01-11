import React from "react"

import CardList from "../components/CardList"
import SearchField from "../components/SearchField"
import Scroll from "../components/Scroll"
import ErrorBoundary from "../components/ErrorBoundary"

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
      <div className="mw5 mw8-ns center pa3 ph5-ns tc">
        <h1 className="page-title">RoboFriends</h1>
        <SearchField onSearchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
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
