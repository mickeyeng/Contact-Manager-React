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
              <h1 className="display-4 mb-2">
                <span className="text-danger">C</span>ontact List
              </h1>
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
