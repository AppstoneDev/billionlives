import React from "react";
import { useState, useEffect } from "react";

// export default class Functional extends React.Component{
//   constructor(props){
//     super(props);

//     this.state = {
//       name: "Akash"
//     }
//   }

//   handleName = () => {
//     this.setState({
//       name:"Gautam"
//     })
//   }

//   componentDidMount(){}

//   componentDidUpdate(){}

//   componentWillUnmount(){}

//   render(){
//     // console.log(this.props);
//     const {
//       isLoggedIn
//     } = this.props;

//     console.log(isLoggedIn);

//     return(
//       <div>
//         hello from The class version of this component
//         {this.state.name}

//         <button onClick={this.handleName}>change name</button>
//       </div>
//     )
//   }
// }

export default function Functional({isLoggedIn, origin, acceptedCookies}){
  const [name, setName] = useState(origin);

  useEffect(()=>{
    //fetch API related to name
  }, [name])

  useEffect(()=>{
    //start timer
  }, [])

  useEffect(()=>{
   return ()=>{
    //end timer
    //send to database
   }
  }, [])

  const handleName = () => {
    setName(10);
  }

  // console.log(props);

  return(
    <div>
      hello from the functional version of this component. {name}
      <button onClick={handleName}>change name</button>
    </div>
  )
}

