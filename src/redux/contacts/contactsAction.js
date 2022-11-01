import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const itemsAdd = createAction('contacts/add', (name, number) => {
  return {
    payload: {
      name,
      number,
      id: nanoid(),
    },
  };
});

const itemsRemove = createAction('contacts/remove');

const filterSet = createAction('filter/set');

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

export { itemsAdd, itemsRemove, filterSet };
