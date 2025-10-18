import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filtered.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {};

export default ContactList;