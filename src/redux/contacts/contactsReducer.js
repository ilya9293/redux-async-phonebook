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
  filterSet,
} from '../contacts/contactsAction';
import isContacts from './intialStateForItems';

const itemsReducer = createReducer([], builder => {
  builder
    .addCase(getContactsSuccess, (_, action) => action.payload)
    .addCase(addContactsSuccess, (state, action) => [...state, action.payload]);
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
    .addCase(addContactsError, () => false);
});

const errorReducer = createReducer(null, builder => {
  builder
    .addCase(getContactsRequest, () => null)
    .addCase(getContactsError, (_, { payload }) => payload)

    .addCase(addContactsRequest, () => null)
    .addCase(addContactsError, (_, { payload }) => payload);
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
