import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Phonebook from './Phonebook/Phonebook';
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
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const nameEdite = form.elements.name.value;
    console.log(this.state.contacts);
    this.setState(state => ({ contacts: state['contacts'].push(nameEdite) }));
    // this.props.onSubmit({ nameEdite });
    form.reset();
  };
  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {/* <Phonebook title="Phonebook" contacts={contacts} /> */}
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h3>Name</h3>
            <label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
          </div>
          <label>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <Contacts title="Contacts" contacts={contacts} />
      </div>
    );
  }
}
