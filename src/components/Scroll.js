import React from "react"
import "./Scroll.css"

export default class Scroll extends React.Component {
  render() {
    return(
      <div className="pa3 bg-light-gray br3 card-list">
        {this.props.children}
      </div>
    );
  }
}