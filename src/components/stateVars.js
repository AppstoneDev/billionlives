import React from "react";

export default class StateVars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 10,
      b: 20,
      c: 30,
      bg: "yellow",
    }
  }

  handleClick = () => {
    this.setState({
      a: 100,
      b: 200
    }, function () {
      this.setState({
        c: this.state.a + this.state.b
      })
    })
  }

  showContent = () =>
    // return(
    // <div>
    //   this is line 1
    //   this is line 2
    //   this is line 3
    // </div>)

    <>
      layout 1
      <input />
      <input />
      <button>login</button>
    </>
  

  handleInput = (e) => {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>

        <div style={{ backgroundColor: this.state.bg, height: 100, width: 100 }}>
          hello from state vars comp
        </div>
        <input 
          name="myname" 
          id="myid" 
          onChange={(e)=>{
            this.setState({})
          }} 
        />

        <button onClick={this.handleClick}>Click me</button>
        <br />
        a: {this.state.a} <br />
        b: {this.state.b} <br />
        c: {this.state.c} <br />

        {this.showContent()}
      </div>
    )
  }
}