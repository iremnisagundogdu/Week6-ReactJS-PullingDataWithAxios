import React, { Component } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import "./App.css";
const Loading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={667} width={375} />
);

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoading: true,
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((result) => {
        setTimeout(() => {
          this.setState({ users: result.data, isLoading: false });
        }, 100);
      })
      .catch(() => {
        this.setState({ isLoading: false });
      });
  }
  render() {
    const { isLoading, users } = this.state;

    if (isLoading) {
      return (
        <div>
          <Loading type="spokes" color="black" />
        </div>
      );
    } else {
      return (
        <table>
          {users.map((user) => (
            <tr key={user.id}>
              -{user.username}:{user.name}
            </tr>
          ))}
        </table>
      );
    }
  }
}

export default App;
