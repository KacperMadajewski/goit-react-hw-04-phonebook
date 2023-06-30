import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class ContactsList extends Component {
  render() {
    const { contactsData, filter, forDelet } = this.props;
    return (
      <ul>
        {contactsData
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
}

ContactsList.propTypes = {
  contactsData: PropTypes.array.isRequired,
  filter: PropTypes.string,
  forDelet: PropTypes.func.isRequired,
};
