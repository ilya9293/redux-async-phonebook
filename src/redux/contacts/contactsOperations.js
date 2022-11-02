import { getData, saveItem } from '../../services/api';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
} from './contactsAction';

const getContacts = () => async dispatch => {
  dispatch(getContactsRequest());
  try {
    const contatcs = await getData('contacts');
    dispatch(getContactsSuccess(contatcs));
  } catch (error) {
    dispatch(getContactsError(error.message));
  }
};

const addContact = contact => async dispatch => {
  dispatch(addContactsRequest());
  try {
    const newContact = await saveItem('contacts', contact);
    dispatch(addContactsSuccess(newContact));
  } catch (error) {
    dispatch(addContactsError(error.message));
  }
};

export { getContacts, addContact };
