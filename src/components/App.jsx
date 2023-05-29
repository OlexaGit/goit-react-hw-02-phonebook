import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';

// model.id = nanoid();

export class App extends Component {
  state = {
    contacts: [
      { id: '1 - 2', name: 'jack' },
      { id: '2 - 2', name: 'john' },
    ],
    name: '',
    number: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />

        <Contacts title="Contacts" contacts={contacts} />
      </div>
    );
  }
}
