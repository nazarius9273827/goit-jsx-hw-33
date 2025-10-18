import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const exists = contacts.some(
      c => c.name.toLowerCase() === name.trim().toLowerCase()
    );
    if (exists) {
      alert(`${name} вже в списку контактів`);
      return;
    }
    dispatch(addContact({ name: name.trim(), number: number.trim() }));
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Ім'я
        <input
          className={styles.input}
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
      <label className={styles.label}>
        Номер
        <input
          className={styles.input}
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
        />
      </label>
      <button className={styles.button} type="submit">Додати контакт</button>
    </form>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
