import React, { Component } from "react";
import axios from "axios";

class Test extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response =>
        this.setState({
          contacts: response.data
        })
      )

      .catch(function(error) {
        console.log(error);
      });
  }

  //   componentWillMount() {
  //     console.log("component Will mount");
  //   }

  //   componentDidUpdate() {
  //     console.log("component did update");
  //   }

  //   componentWillUpdate() {
  //     console.log("component will update");
  //   }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1 className="mb-4">Test Component</h1>
        <hr />
        {contacts.map(contact => {
          return (
            <div key={contact.id}>
              <h3>{contact.name}</h3>
              <h3>{contact.email}</h3>
              <h3>{contact.phone}</h3>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Test;
