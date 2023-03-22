import { Component } from 'react';
import { Form } from '../Form/Form';

interface IContact {
  name: string;
  number: string;
}
interface IState {
  contacts: object[];
}

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = (data: IContact) => {
    const copy: IState = this.state;
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
