import React from "react";
import Button from '@mui/material/Button';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, IconButton, Icon } from "@mui/material";

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

  showUsers2 = (user, index) => {
    return (
      <div>{index} {user.first_name} {user.last_name}
        <button>X</button>
      </div>
    )
  }

  showUsers = (user, index) => {
    return (
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <Icon>
              delete_forever
            </Icon>
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar
            src={user.avatar}
          />
        </ListItemAvatar>
        <ListItemText
          primary={user.first_name}
          secondary={user.email}
        />
      </ListItem>
    )
  }

  render() {
    return (
      <div>
        hello fetcher
        <button onClick={this.getUsers}>refresh</button>
        <List>
          {this.state.users.map(this.showUsers)}
        </List>

        <Button variant="contained" color="error" onClick={this.handlePush}>push</Button>
        <Button onClick={this.handlePop}>pop</Button>
        <Button onClick={this.createUser}>create user</Button>

      </div>
    )
  }
}