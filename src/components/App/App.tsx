import { Component } from 'react';
import { Form } from '../Form/Form';
import { ContactsList } from '../ContactsList/Contactslist';
import { Contact } from '../Contact/Contact';

interface IContact {
  name: string;
  number: string;
  id: string;
}
interface IState {
  contacts: IContact[];
}

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = (data: IContact): void => {
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
        <ContactsList>
          {this.state.contacts.map((item: IContact) => (
            <Contact name={item.name} number={item.number} key={item.id} />
          ))}
        </ContactsList>
      </div>
    );
  }
}
