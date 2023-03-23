import React, { Component } from 'react';
interface IContactProps {
  name: string;
  number: string;
  id: string;
}

export class Contact extends Component<IContactProps> {
  render() {
    return (
      <li>
        <p>
          {this.props.name}:{this.props.number}
        </p>
        <button type="button">Delete</button>
      </li>
    );
  }
}
