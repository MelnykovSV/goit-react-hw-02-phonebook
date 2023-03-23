import { Component } from 'react';
const shortid = require('shortid');

// interface IContactsListProps {
//   children: { name: string; number: string; id: string }[];
// }

interface IContactsListProps {
  children: React.ReactFragment[];
}

export class ContactsList extends Component<IContactsListProps> {
  formId = shortid.generate();

  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>Contacts</h2>
        <form action="#">
          <label htmlFor={this.formId}>Find contacts by name</label>
          <input type="text" name="" id={this.formId} />
        </form>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}
