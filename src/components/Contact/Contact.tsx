import React, { Component } from 'react';
interface IContactProps {
  name: string;
  number: string;
  id: string;
  deleteHandler: (id: string) => void;
}

export class Contact extends Component<IContactProps> {
  state = {
    id: this.props.id,
  };
  handleDeleteClick = () => {
    this.props.deleteHandler(this.state.id);
  };
  render(): JSX.Element {
    return (
      <li className={this.props.className}>
        <p>
          {this.props.name}: {this.props.number}
        </p>
        <button type="button" onClick={this.handleDeleteClick}>
          Delete
        </button>
      </li>
    );
  }
}
