import React from 'react';
import SyncValidationForm from './SyncValidationForm';

class SyncValidationPage extends React.Component {
  state = {

  }

  submit = values => {
    // print the form values to the console
    console.log('SyncValidationPage: ', values)
  }

  render() {
    return (
      <div>
        <h3>SyncValidationForm</h3>
        <SyncValidationForm onSubmit={this.submit} />
      </div>
    )
  }

}

export default SyncValidationPage;
