import Styles from './ContactsForm.module.css';
import React from 'react';
import PropTypes from 'prop-types';


export function ContactsForm({ forSubmit, onChange, name, number }
) {
  return (
    <form onSubmit={forSubmit} className={Styles.form}>
      <span>Name</span>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
        value={name}
        placeholder="Write Your name"
        className={Styles.input}
      />
      <span>Number</span>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onChange}
        value={number}
        placeholder="Write Your number"
        className={Styles.input}
      />
      <button type="submit" className={Styles.btn}>
        Add contact
      </button>
    </form>
  );
}

ContactsForm.propTypes = {
  onChange: PropTypes.func,
  forSubmit: PropTypes.func,
  name: PropTypes.any,
  number: PropTypes.any,
};