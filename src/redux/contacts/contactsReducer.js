import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  itemsAdd,
  itemsRemove,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  filterSet,
} from '../contacts/contactsAction';
// import isContacts from './intialStateForItems';

const itemsReducer = createReducer([], builder => {
  builder
    .addCase(getContactsSuccess, (_, action) => action.payload)
    .addCase(addContactsSuccess, (state, action) => [...state, action.payload])
    .addCase(removeContactSuccess, (state, action) => {
      // console.log(state);
      const newState = [...state];
      newState.filter(contact => console.log(contact.id));
      // console.log(action.payload.id);
      // state.contacts.items.filter(contact => contact.id !== action.payload.id);
    });
});

const firstLoadingReducer = createReducer(false, builder => {
  builder
    .addCase(getContactsRequest, () => true)
    .addCase(getContactsSuccess, () => false)
    .addCase(getContactsError, () => false);
});

const loadingReducer = createReducer(false, builder => {
  builder
    .addCase(addContactsRequest, () => true)
    .addCase(addContactsSuccess, () => false)
    .addCase(addContactsError, () => false)

    .addCase(removeContactRequest, () => true)
    .addCase(removeContactSuccess, () => false)
    .addCase(removeContactError, () => false);
});

const errorReducer = createReducer(null, builder => {
  builder
    .addCase(getContactsRequest, () => null)
    .addCase(getContactsError, (_, { payload }) => payload)

    .addCase(addContactsRequest, () => null)
    .addCase(addContactsError, (_, { payload }) => payload)

    .addCase(removeContactRequest, () => null)
    .addCase(removeContactError, (_, { payload }) => payload);
});

const filterReducer = createReducer('', builder => {
  builder.addCase(filterSet, (_, action) => action.payload);
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  firstLoading: firstLoadingReducer,
  loading: loadingReducer,
  error: errorReducer,
  filter: filterReducer,
});

export { itemsReducer, filterReducer, contactsReducer };
