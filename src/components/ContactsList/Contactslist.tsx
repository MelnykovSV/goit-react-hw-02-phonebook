import React from 'react';
import { Container } from './Contactslist.styled';
// import { StyledSearchIcon } from './Contactslist.styled';
import { IContactsListProps } from '../../interfaces';
// import shortid from 'shortid';
import { IContact } from '../../interfaces';
import { Contact } from '../Contact/Contact';

export class ContactsList extends React.Component<IContactsListProps> {
  // formId = shortid.generate();
  // searchHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   this.props.contactsFilter(e.target.value);
  // };

  render() {
    return (
      <Container>
        {/* <label htmlFor={this.formId}>Find contacts by name</label>
        <div>
          <input
            type="text"
            name=""
            id={this.formId}
            onChange={this.searchHandler}
            placeholder="Type to find..."
          />
          <StyledSearchIcon />
        </div> */}

        <ul>
          {this.props.filteredContacts.map((item: IContact) => (
            <Contact
              name={item.name}
              number={item.number}
              id={item.id}
              key={item.id}
              deleteHandler={this.props.contactDeleteHandler}
            />
          ))}
        </ul>
      </Container>
    );
  }
}
