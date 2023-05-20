import React from 'react';
import { Container } from './Contactslist.styled';
// import { BiSearchAlt2 } from 'react-icons/bi';
import { StyledSearchIcon } from './Contactslist.styled';
import { IContactsListProps } from '../../interfaces';
import shortid from 'shortid';

export class ContactsList extends React.Component<IContactsListProps> {
  formId = shortid.generate();
  searchHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.contactsFilter(e.target.value);
  };

  render() {
    return (
      <Container>
        <h2>Contacts</h2>

        <label htmlFor={this.formId}>Find contacts by name</label>
        <div>
          <input
            type="text"
            name=""
            id={this.formId}
            onChange={this.searchHandler}
            placeholder="Type to find..."
          />
          <StyledSearchIcon />
        </div>

        <ul>{this.props.children}</ul>
      </Container>
    );
  }
}
