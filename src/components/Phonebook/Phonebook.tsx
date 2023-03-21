import React, { Component } from 'react';

interface IContact {
  id: string;
  name: string;
  number: string;
}
interface IContacts {
  contacts: IContact[];
  nextID: number;
}

export class Phonebook {
  static defaultProps = {
    contacts: [],
    nextID: 1,
  };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    nextID: this.defaultProps.nextID,
  };

  deleteContact(name: string): void {
    this.setState((prevState: IContacts) => {
      prevState.contacts.splice(
        prevState.contacts.findIndex((item: IContact) => item.name === name),
        1
      );
    });
  }

  findContacts(name: string): IContact[] {
    return this.state.contacts.filter((contact: IContact) =>
      contact.name.includes(name)
    );
  }

  createContact(name: string, number: string): IContact {
    const contact = { id: this.state.nextID, name, number };
    this.setState((prevStage: IContacts) => {
      prevStage.nextID += 1;
    });

    return contact;
  }

  addContact(contact: IContact): void {
    this.setState((prevState: IContacts) => {
      prevState.contacts.push(contact);
    });
  }

  render() {
    return;
  }
}
