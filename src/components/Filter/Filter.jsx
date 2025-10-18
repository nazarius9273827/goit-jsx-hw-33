import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.wrap}>
      <label>
        Пошук
        <input
          className={styles.input}
          value={filter}
          onChange={handleChange}
          placeholder="Введи ім'я для пошуку"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {};

export default Filter;
