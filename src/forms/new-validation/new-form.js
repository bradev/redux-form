import React from 'react';


class Formy extends React.Component {
  state = {
    data: {

    },
    loading: false,
    errors: {}
  }

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .then(() => {
          //this.setState({
            //loading: false,
            //data: {

            //}
          //})
        })
        .catch(err =>
          //this.setState({
            //errors: err.response.data.errors,
            //loading: false
          //})
        );
    }
  };

  // sample:  if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
  validate = data => {
    const errors = {};
    // conditions
    return errors;
  };

  render() {
    const {data, errors, loading} = this.state;

    return (
      <div></div>
    );
  }

}

export default Formy;
