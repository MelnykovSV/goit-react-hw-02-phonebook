import { Component } from 'react';
import { Form } from '../Form/Form';
import { ContactsList } from '../ContactsList/Contactslist';
import { ModernNormalize } from 'emotion-modern-normalize';
import { Container } from './App.styled';

import { IContact, IState } from '../../interfaces';

export class App extends Component<{}, IState> {
  state: IState = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = (data: IContact): void => {
    const normalizedName = data.name.toLowerCase();

    if (
      !this.state.contacts.some(
        item => item.name.toLowerCase() === normalizedName
      )
    ) {
      this.setState({ contacts: [data, ...this.state.contacts] });
    } else {
      alert(`${data.name} is already in contacts.`);
    }
  };

  contactDeleteHandler = (id: string): void => {
    const data = this.state;
    const result = data.contacts.filter((item: IContact): boolean => {
      return item.id !== id;
    });
    this.setState({ contacts: result });
  };

  contactsFilter = (value: string): void => {
    this.setState({ filter: value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(
      (item: IContact): boolean => {
        return item.name.toLowerCase().includes(normalizedFilter);
      }
    );

    return (
      <Container>
        <ModernNormalize />
        <h2>Phonebook</h2>

        <Form formSubmit={this.formSubmitHandler}></Form>
        <ContactsList
          contactsFilter={this.contactsFilter}
          filteredContacts={filteredContacts}
          contactDeleteHandler={this.contactDeleteHandler}
        />
      </Container>
    );
  }
}
