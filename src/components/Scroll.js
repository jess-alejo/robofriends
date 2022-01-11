import React from "react"

export default class Scroll extends React.Component {
  render() {
    return(
      <div className="pa3" style={{overflowY: "scroll", height: "500px"}}>
        {this.props.children}
      </div>
    );
  }
}