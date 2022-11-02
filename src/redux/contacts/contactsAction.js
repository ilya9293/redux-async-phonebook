import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const getContactsRequest = createAction('contacts/getContactsRequest');
const getContactsSuccess = createAction('contacts/getContactsSuccess');
const getContactsError = createAction('contacts/getContactsError');

const addContactsRequest = createAction('contacts/addContactsRequest');
const addContactsSuccess = createAction('contacts/addContactsSuccess');
const addContactsError = createAction('contacts/addContactsError');

// const itemsAdd = createAction('contacts/add', (name, number) => {
//   return {
//     payload: {
//       name,
//       number,
//       id: nanoid(),
//     },
//   };
// });

// const itemsRemove = createAction('contacts/remove');

const filterSet = createAction('filter/set');

export {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  filterSet,
};

// Old actions

// const itemsAdd = (name, number) => ({
//   type: 'contacts/add',
//   payload: {
//     name,
//     number,
//     id: nanoid(),
//   },
// });

// const itemsRemove = contact => ({
//   type: 'contacts/remove',
//   payload: contact,
// });

// const filterSet = filter => ({
//   type: 'filter/set',
//   payload: filter,
// });

// export { itemsAdd, itemsRemove, filterSet };
