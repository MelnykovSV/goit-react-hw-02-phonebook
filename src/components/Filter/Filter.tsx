import React from 'react';
import { Container } from './Filter.styled';
import { StyledSearchIcon } from '../ContactsList/Contactslist.styled';
import shortid from 'shortid';
import { IFilterProps } from '../../interfaces';

export class Filter extends React.Component<IFilterProps> {
  formId = shortid.generate();
  searchHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.contactsFilter(e.target.value);
  };

  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}
