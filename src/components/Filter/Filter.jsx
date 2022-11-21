import React from 'react';
import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { filterSet } from '../../redux/contacts/contactsAction';
import { contactsReducer } from '../../redux/contacts/contactsReducer';

function Filter() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const filterSet = contactsReducer.actions.filterSet;

  const handleChange = e => dispatch(filterSet(e.target.value));

  return (
    <label className={s.filter}>
      Find contacts by name
      <input type="text" name="filter" value={contacts.filter} onChange={handleChange} />
    </label>
  );
}

export default Filter;
