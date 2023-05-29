import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

// model.id = nanoid();

export class App extends Component {
  state = {
    contacts: [
      { id: '1 - 2', name: 'jack' },
      { id: '2 - 2', name: 'john' },
    ],
    filter: '',
  };

  searchInputId = nanoid();

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

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const getVisibleContacts = this.getVisibleContacts();

    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter valueFilter={filter} onChange={this.changeFilter} />
        <Contacts contacts={getVisibleContacts} />
      </div>
    );
  }
}
