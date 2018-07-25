import React from "react";
import Contact from "./contact";

class Contacts extends React.Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "55555-5555-555"
      },
      {
        id: 2,
        name: "Bob Jones",
        email: "bobJones@gmail.com",
        phone: "55545-54455-555"
      },
      {
        id: 3,
        name: "Lauren Carter",
        email: "laurenCarter@gmail.com",
        phone: "544545-54455-555"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map((contact, id) => <Contact key={id} contact={contact} />)}
      </React.Fragment>
    );
  }
}

export default Contacts;
