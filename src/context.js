import React from "react";
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    // IF THE TYPE IS DELETE CONTACT RETURN THE FOLLOWING
    case "DELETE_CONTACT":
      return {
        // copy of the state
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    case "ADD_CONTACT":
      return {
        // copy of the state
        ...state,
        // add on the new contact with action.payload
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends React.Component {
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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
