import React from "react";

class BadgeForm extends React.Component {
  state = {};

  // handleChange = e => {
  //     console.log({
  //         name: e.target.name,
  //         value: e.target.value
  //     });

  //     this.setState({
  //         [e.target.name]: e.target.value,
  //     });
  // }

  handleClick = (e) => {
    console.log("Button was clicked");
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form was submitted");
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              value={this.props.formValues.firstName}
              onChange={this.props.onChange}
              id="firstName"
              className="form-control"
              type="text"
              name="firstName"
              placeholder="Introduce your name"
              autoComplete="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              value={this.props.formValues.lastName}
              onChange={this.props.onChange}
              id="lastName"
              className="form-control"
              type="text"
              name="lastName"
              placeholder="Introduce your last name"
              autoComplete="lastName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={this.props.formValues.email}
              onChange={this.props.onChange}
              id="email"
              className="form-control"
              type="email"
              name="email"
              placeholder="Introduce your email"
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              value={this.props.formValues.jobTitle}
              onChange={this.props.onChange}
              id="jobTitle"
              className="form-control"
              type="text"
              name="jobTitle"
              placeholder="Introduce your profession"
              autoComplete="profession"
            />
          </div>

          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              value={this.props.formValues.twitter}
              onChange={this.props.onChange}
              id="twitter"
              className="form-control"
              type="text"
              name="twitter"
              placeholder="Introduce your Twitter"
              autoComplete="twitter"
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
