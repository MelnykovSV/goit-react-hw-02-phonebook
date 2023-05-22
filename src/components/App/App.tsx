import { Component } from 'react';
import { Form } from '../Form/Form';
import { ContactsList } from '../ContactsList/Contactslist';
import { ModernNormalize } from 'emotion-modern-normalize';
import { Container } from './App.styled';
import { Filter } from '../Filter/Filter';

import shortid from 'shortid';

import { IContact, IState } from '../../interfaces';

export class App extends Component<{}, IState> {
  state: IState = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = (e: React.SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      elements: {
        name: { value: string };
        number: { value: string };
      };
      reset: () => void;
    };
    e.preventDefault();
    const name = target.elements.name.value.toLowerCase();
    const number = target.elements.number.value;
    const id = shortid();

    if (!this.state.contacts.some(item => item.name.toLowerCase() === name)) {
      this.setState({
        contacts: [{ name, number, id }, ...this.state.contacts],
      });
      target.reset();
    } else {
      alert(`${name} is already in contacts.`);
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

        <Form formSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter contactsFilter={this.contactsFilter} />
        <ContactsList
          filteredContacts={filteredContacts}
          contactDeleteHandler={this.contactDeleteHandler}
        />
      </Container>
    );
  }
}
