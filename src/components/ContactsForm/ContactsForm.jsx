import React, { Component } from 'react';
import Styles from './ContactsForm.module.css';
import PropTypes from 'prop-types';


export function ContactsForm() {
  handleSubmit = ev => {
    ev.preventDefault();
    const name1 = this.state.name;
    const number1 = this.state.number;
    const existingName = this.state.contacts.find(
      value => value.name.toLowerCase() === name1.toLowerCase()
    );
    existingName
      ? alert(`Unfortunately name: ${name1} allready exist in this contacts!`)
      : this.setState({
          contacts: [
            ...this.state.contacts,
            { name: name1, number: number1, id: nanoid() },
          ],
          name: '',
          number: '',
        });
  };

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
}

export class ContactsForm2 extends Component {
  render() {
    const { forSubmit, onChange, valueName, valueNumber } = this.props;
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
          value={valueName}
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
          value={valueNumber}
          placeholder="Write Your number"
          className={Styles.input}
        />
        <button type="submit" className={Styles.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  forSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  valueName: PropTypes.string,
  valueNumber: PropTypes.string,
};
