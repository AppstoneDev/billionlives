import React from "react";

export default class Fetcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch("https://reqres.in/api/users?page=1&delay=3")
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          users: resJson.data
        })
      })
  }

  createUser = () => {
    fetch("https://reqres.in/api/users", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Akash',
        job: 'dev'
      })
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson)
      })
  }

  handlePop = () => {
    var u = this.state.users;
    u.pop();
    this.setState({
      users: u
    })
  }

  handlePush = () => {
    var u = this.state.users;
    u.push({
      first_name: "Akash",
      last_name: "Gautam"
    });
    this.setState({
      users: u
    })
  }

  showUsers = (user, index) => {
    return (
      <div>{index} {user.first_name} {user.last_name}
        <button>X</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        hello fetcher
        <button onClick={this.getUsers}>refresh</button>

        {this.state.users.map(this.showUsers)}

        <button onClick={this.handlePush}>push</button>
        <button onClick={this.handlePop}>pop</button>
        <button onClick={this.createUser}>create user</button>
      </div>
    )
  }
}