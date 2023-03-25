import React, { Component } from 'react';
const shortid = require('shortid');

interface IContactsListProps {
  children: JSX.Element[];
  contactsFilter: (value: string) => void;
}

export class ContactsList extends React.Component<IContactsListProps> {
  formId = shortid.generate();
  searchHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.contactsFilter(e.target.value);
  };

  render() {
    return (
      <div>
        <h2>Contacts</h2>
        <form action="#">
          <label htmlFor={this.formId}>Find contacts by name</label>
          <input
            type="text"
            name=""
            id={this.formId}
            onChange={this.searchHandler}
          />
        </form>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}
