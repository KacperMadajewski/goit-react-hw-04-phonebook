import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleSubmit(ev) {
    ev.preventDefault();
    const existingName = contacts.find(
      value => value.name.toLowerCase() === name.toLowerCase()
    );
    existingName
      ? alert(`Unfortunately name: ${name} allready exist in this contacts!`)
      : setContacts({
          contacts: [...contacts, { name: name, number: number, id: nanoid() }],
        });
  }

  function handleChange(ev) {
    if (ev.target.name === 'name') {
      setName({ name: name });
    } else if (ev.target.name === 'number') {
      setNumber({ number: number });
    } else {
      setFilter({ filter: filter });
    }
  }

  function forDelet(id) {
    const actualContacts = contacts.filter(contact => contact.id !== id);

    setContacts({
      contacts: actualContacts,
    });
  }

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
      <h1>Phonebook</h1>
      <ContactsForm
        forSubmit={handleSubmit}
        onChange={handleChange}
        name={name}
        number={number}
      />

      <h2>Contacts</h2>
      <Filter onChange={handleChange} filter={filter} />
      <ContactsList contact={contacts} filter={filter} forDelet={forDelet} />
    </div>
  );
};
