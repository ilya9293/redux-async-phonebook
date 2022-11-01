import s from './App.module.css';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import * as storage from '../../services/localStorage';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const CONTACTSLOCALE = 'contacts';

const App = () => {
  const state = useSelector(state => state.contacts);

  useEffect(() => {
    storage.save(CONTACTSLOCALE, state.items);
  }, [state.items]);

  const handleFilter = () =>
    state.items.filter(contact => {
      return contact.name.toLowerCase().includes(state.filter.toLowerCase());
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
