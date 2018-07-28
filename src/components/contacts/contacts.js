import React from "react";
import Contact from "./contact";
import { Consumer } from "../../context";

class Contacts extends React.Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map((contact, id) => (
                <Contact key={id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
