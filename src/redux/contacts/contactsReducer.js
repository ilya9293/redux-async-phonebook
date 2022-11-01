import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { itemsAdd, itemsRemove, filterSet } from '../contacts/contactsAction';
import isContacts from './intialStateForItems';

const itemsReducer = createReducer(isContacts, builder => {
  builder
    .addCase(itemsAdd, (state, action) => [...state, action.payload])
    .addCase(itemsRemove, (_, action) => action.payload);
});

const filterReducer = createReducer('', builder => {
  builder.addCase(filterSet, (_, action) => action.payload);
});

// Old reducers
// const itemsReducer = (state = isContacts, action) => {
//   switch (action.type) {
//     case 'contacts/add':
//       return [...state, action.payload];
//     case 'contacts/remove':
//       return action.payload;

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'filter/set':
//       return action.payload;

//     default:
//       return state;
//   }
// };

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export { itemsReducer, filterReducer, contactsReducer };
