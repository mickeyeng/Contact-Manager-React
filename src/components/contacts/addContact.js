import React from "react";
import { Consumer } from "../../context";
import uuid from "uuid";
import TextInputGroup from "../layout/textInputGroup";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    phone: ""
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

    const newContact = {
      // library to generate random id
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });
    // clear state
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };

  render() {
    const { name, email, phone } = this.state;
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
                  />
                  <TextInputGroup
                    label="Email"
                    name="name"
                    placeholder="Enter a email..."
                    value={email}
                    onChange={this.onChange}
                    type="email"
                  />
                  <TextInputGroup
                    label="Phone No"
                    name="name"
                    placeholder="Enter a Phone..."
                    value={phone}
                    onChange={this.onChange}
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
