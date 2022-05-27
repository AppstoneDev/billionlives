import React from "react";
import Lifecycle from "./lifecycle";

export default class ConditionalRendering extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      startDate: null
    }
  }

  setStartDate = (e) => {
    this.setState({
      startDate: new Date()
    })
  }

  handleClick = (e) => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div>
        {this.state.show === true &&
          <Lifecycle
            setStartDate={this.setStartDate}
          />
        }

        <button
          onClick={this.handleClick}
        >
          toggle
        </button>
      </div>
    )
  }
}