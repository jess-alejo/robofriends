import React, { Fragment } from "react"
import Card from "./Card"

export default class CardList extends React.Component {
  render() {
    let cards = this.props.robots.map(robot => {
      return <Card key={robot.id} name={robot.name} email={robot.email} id={robot.id}/>
    })

    return (
      <Fragment>
        {cards}
      </Fragment>
    );
  }
}
