import React from "react";

export default class Lifecycle extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    console.log("from component did mount");
    //start timer 
    this.props.setStartDate();
  }

  componentDidUpdate(){
    console.log("from component did update");
  }

  render() {
    console.log("from render");
    return (
      <div>
        count: {this.state.count}
        <button onClick={()=>{
          this.setState({
            count: this.state.count + 1
          })
        }}>
          increase
        </button>
      </div>
    )
  }

  componentWillUnmount(){
    console.log("from component will unmount");
    //stop timer
    //store in db
  }
}