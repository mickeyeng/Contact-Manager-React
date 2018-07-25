import React from "react";
import PropTypes from "prop-types";

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

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: propTypes.string.isRequired
};

export default Contact;
