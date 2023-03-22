import { Component } from 'react';
import { Form } from '../Form/Form';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    const copy = this.state;
    copy.contacts.push(data);
    this.setState(copy);
    console.log(this.state);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        Phonebook
        <Form formSubmit={this.formSubmitHandler}></Form>
      </div>
    );
  }
}
