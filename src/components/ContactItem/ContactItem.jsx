import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';
import styles from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  return (
    <li className={styles.item}>
      <span className={styles.info}>{contact.name}: {contact.number}</span>
      <button className={styles.button} onClick={handleRemove}>Видалити</button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
