import React from "react";
import { Consumer } from "../../context";
import uuid from "uuid";
import TextInputGroup from "../layout/textInputGroup";
import axios from "axios";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onChange = e => {
    this.setState({
      // this will get the name of each input
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (dispatch, e) => {
    const { name, email, phone } = this.state;
    e.preventDefault();

    // check for errors
    if (name === "") {
      this.setState({
        errors: {
          name: "Name is required"
        }
      });
      return;
    }

    if (email === "") {
      this.setState({
        errors: {
          email: "Email address is required"
        }
      });
      return;
    }

    if (phone === "") {
      this.setState({
        errors: {
          phone: "Phone number is required"
        }
      });
      return;
    }

    const newContact = {
      // library to generate random id
      id: uuid(),
      name,
      email,
      phone
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", newContact)
      .then(response =>
        dispatch({ type: "ADD_CONTACT", payload: response.data })
      );

    // clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter a name..."
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    placeholder="Enter a email..."
                    value={email}
                    onChange={this.onChange}
                    type="email"
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone No"
                    name="phone"
                    placeholder="Enter a Phone..."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add contact"
                    className="btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
