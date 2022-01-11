import React from "react"

export default class SearchField extends React.Component {
  render() {
    return (
      <div className="mb4">
        <input type="search"
               placeholder="search robots"
               className="input-reset ba b--purple pa3 ma2"
               onChange={this.props.onSearchChange} />
      </div>
    )
  }
}
