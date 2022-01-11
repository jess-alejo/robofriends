import React from "react"

export default class Card extends React.Component {
  render() {
    return (
      <div className="tc bg-light-gray pa4 ma3 dib br2 grow">
        <img src={`https://robohash.org/${this.props.id}?size=200x200`} alt="avatar" />
        <h2>{this.props.name}</h2>
        <p>{this.props.email}</p>
      </div>
    )
  }
}
