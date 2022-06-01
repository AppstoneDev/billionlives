import React from "react";
var a = 10;
var b = 100;
let c = {
  backgroundColor: "green",
  width: 300,
  height: 300
};



export default class Akash extends React.Component {

  showContent = () => {
    a = 20;
    b = 500;
    console.log(a);
    console.log(b);
  }

  handleChange = () => {
    this.setState({
      a: this.state.a + 10
    })
  }

  render() {
    b = 200;
    return (
      <div
        style={{
          backgroundColor: a,
          width: 300,
          height: 300
        }}
      >
        Hello world

        <input onChange={this.handleChange} />
        <button onClick={this.showContent}>
          click me
        </button>
        {a}
        {b}
      </div>
    )
  }
}