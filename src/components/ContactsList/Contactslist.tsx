import React from 'react';
import { Container } from './Contactslist.styled';
import { IContactsListProps } from '../../interfaces';
import { IContact } from '../../interfaces';
import { Contact } from '../Contact/Contact';

export const ContactsList = ({
  filteredContacts,
  contactDeleteHandler,
}: IContactsListProps) => {
  return (
    <Container>
      <ul>
        {filteredContacts.map((item: IContact) => (
          <Contact
            name={item.name}
            number={item.number}
            id={item.id}
            key={item.id}
            deleteHandler={contactDeleteHandler}
          />
        ))}
      </ul>
    </Container>
  );
};
