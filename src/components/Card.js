import React from "react"

export default class Card extends React.Component {
  render() {
    return (
      <div className={`tc ${this.randomBackground()} pa4 ma3 dib br2 grow shadow-2`}>
        <img src={`https://robohash.org/${this.props.id}?set=set3&size=200x200`} alt="avatar" />
        <h2>{this.props.name}</h2>
        <p>{this.props.email}</p>
      </div>
    )
  }

  randomBackground() {
    let colors = ["bg-light-pink", "bg-light-blue", "bg-light-yellow", "bg-light-red"];

    console.log(this.props.id % colors.length)
    return colors[this.props.id % colors.length];
  }
}
