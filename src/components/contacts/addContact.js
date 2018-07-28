import React from "react";

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

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                name="name"
                type="text"
                value={name}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                name="email"
                type="email"
                value={email}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input
                className="form-control form-control-lg"
                placeholder="Enter Phone Number..."
                name="phone"
                value={phone}
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              value="Add contact"
              className="btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
