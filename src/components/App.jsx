import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { useState, useEffect } from 'react';

export const App = () => {
const [contacts, setContacts] = useState(() => {
  const localContacts = localStorage.getItem('phoneContact');
  const parsedContacts = JSON.parse(localContacts);
  return parsedContacts ? parsedContacts : [];
});  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleSubmit(ev) {
    ev.preventDefault();
    const existingName = contacts.find(
      value => value.name.toLowerCase() === name.toLowerCase()
    );
    existingName
      ? alert(`Unfortunately name: ${name} allready exist in this contacts!`)
      : setContacts(prevContacts => [
          ...prevContacts,
          { name: name, number: number, id: nanoid() },
        ]);
  }

  function handleChange(ev) {
    if (ev.target.name === 'name') {
      setName(ev.target.value);
    } else if (ev.target.name === 'number') {
      setNumber(ev.target.value);
    } else {
      setFilter(ev.target.value);
    }
  }

  function forDelet(id) {
    const actualContacts = contacts.filter(contact => contact.id !== id);
    setContacts(actualContacts);
  }

  useEffect(() => {
    const localContacts = localStorage.getItem('phoneContact');
    const parsedContacts = JSON.parse(localContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('phoneContact', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
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
      <ContactsList contacts={contacts} filter={filter} forDelet={forDelet} />
    </div>
  );
};
