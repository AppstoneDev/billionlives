import React from "react";
import Lifecycle from "./lifecycle";
import {
  Link
} from "react-router-dom";

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
        <Link to="/path2">go to path 2</Link>
        {this.state.show == true &&
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