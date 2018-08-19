import React, { Component } from 'react';
import SimpleFormPage from './forms/simple/simple-form-page';
import SyncValidationPage from './forms/synchronous-validation/SyncValidationPage';

class App extends Component {
  render() {
    return (
      <div>
        <SimpleFormPage />
        <SyncValidationPage />
      </div>
    );
  }
}

export default App;
