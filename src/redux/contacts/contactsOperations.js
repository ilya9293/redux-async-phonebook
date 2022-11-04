import { getData, saveItem, deleteItem } from '../../services/api';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from './contactsAction';

const CONTACTSLOCALE = 'contacts';

const getContacts = () => async dispatch => {
  dispatch(getContactsRequest());
  try {
    const contatcs = await getData(CONTACTSLOCALE);
    dispatch(getContactsSuccess(contatcs));
  } catch (error) {
    dispatch(getContactsError(error.message));
  }
};

const addContact = contact => async dispatch => {
  dispatch(addContactsRequest());
  try {
    const newContact = await saveItem(CONTACTSLOCALE, contact);
    dispatch(addContactsSuccess(newContact));
  } catch (error) {
    dispatch(addContactsError(error.message));
  }
};

const removeContact = id => async dispatch => {
  dispatch(removeContactRequest());
  try {
    const deletedContact = await deleteItem(CONTACTSLOCALE, id);
    dispatch(removeContactSuccess(deletedContact));
  } catch (error) {
    dispatch(removeContactError(error.message));
  }
};

export { getContacts, addContact, removeContact };
