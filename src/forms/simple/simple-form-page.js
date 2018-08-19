import React from 'react';
import SimpleForm from './simple-form';

class SimpleFormPage extends React.Component {
  state = {

  }

  submit = values => {
    // print the form values to the console
    console.log('SimpleFormPage: ',values)
  }

  render() {
    return (
      <div>
        <h3>SimpleForm</h3>
        <SimpleForm onSubmit={this.submit} />
      </div>
    )
  }

}

export default SimpleFormPage;
