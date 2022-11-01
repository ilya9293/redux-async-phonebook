import { useDispatch, useSelector } from 'react-redux';
// import { itemsRemove } from '../../../redux/contacts/contactsAction';
import { itemsSlice } from '../../../redux/contacts/contactsSlice';
import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ id }) {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const deleteContact = () => {
    const filteredContacts = contacts.items.filter(contact => contact.id !== id);
    //  dispatch(itemsRemove(filteredContacts));
    dispatch(itemsSlice.actions.itemsRemove(filteredContacts));
  };

  return (
    <button type="button" className={s.btn} onClick={deleteContact}>
      Delete
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Button;
