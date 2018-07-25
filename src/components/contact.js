import React from "react";

class Contact extends React.Component {
  render() {
    // DESTRUCTURING
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone No: {phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
