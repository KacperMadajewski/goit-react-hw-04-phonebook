import React, { Component } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

componentDidMount() {
    const contacts = localStorage.getItem('phoneContact');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('phoneContact', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'name') {
      this.setState({ name: value });
    } else if (name === 'number') {
      this.setState({ number: value });
    } else {
      this.setState({ filter: value });
    }
  };

  forDelet = id => {
    const actualContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );

    this.setState({
      contacts: actualContacts,
      filter: '',
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactsForm
          forSubmit={this.handleSubmit}
          onChange={this.handleChange}
          valueName={this.state.name}
          valueNumber={this.state.number}
        />

        <h2>Contacts</h2>
        <Filter
          filterChange={this.handleChange}
          valueFilter={this.state.filter}
        />
        <ContactsList
          contactsData={this.state.contacts}
          filter={this.state.filter}
          forDelet={this.forDelet}
        />
      </div>
    );
  }
}

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
