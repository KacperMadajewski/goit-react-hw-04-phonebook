import { nanoid } from 'nanoid';
import React from 'react';

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
