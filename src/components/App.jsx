import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  searchInputId = nanoid();

  handleNameMatch = ({ name, number }) => {
    const { contacts } = this.state;
    const normalizedFind = name.toLocaleLowerCase();
    return contacts.find(
      contact => contact.name.toLocaleLowerCase() === normalizedFind
    )
      ? Notiflix.Notify.warning(`${name} is already in contacts!`)
      : this.formSubmitHandler(name, number);
  };

  formSubmitHandler = (name, number) => {
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

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const getVisibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleNameMatch} />
        <h2>Contacts</h2>
        <Filter valueFilter={filter} onChange={this.changeFilter} />
        <Contacts
          contacts={getVisibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
App.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(PropTypes.string.isRequired),
    filter: PropTypes.string.isRequired,
  }),
};
