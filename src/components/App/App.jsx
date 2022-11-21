import s from './App.module.css';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
// import * as storage from '../../services/localStorage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contactsOperations';
import { getItems, getFilter } from '../../redux/contacts/contactsSelectors';

// const CONTACTSLOCALE = 'contacts';

const App = () => {
  //   const state = useSelector(state => state.contacts);
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleFilter = () =>
    items.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

  return (
    <div className={s.container}>
      <h2 className={s.title}>Phonebook</h2>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>

      <Filter />
      {!!handleFilter().length && <ContactList handleFilter={handleFilter} />}
    </div>
  );
};

export default App;
