import { nanoid } from 'nanoid';
import React from 'react';
import PropTypes from 'prop-types';


export function ContactsList({ contacts, filter, forDelet }) {
  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => (
          <li key={nanoid()}>
            {contact.name}: {contact.number}
            <button type="submit" onClick={() => forDelet(contact.id)}>
              Delet
            </button>
          </li>
        ))}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.any,
  filter: PropTypes.any,
  forDelet: PropTypes.func,
};