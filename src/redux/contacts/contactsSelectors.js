const getItems = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getLoading = state => state.contacts.loading;

const getError = state => state.contacts.error;

export { getItems, getFilter, getLoading, getError };
