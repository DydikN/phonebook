export const getContacts = store => store.contacts.items;

export const getLoadig = store => store.contacts.isLoading;

export const getError = store => store.contacts.error;

export const getFilter = store => store.filter;

export const getVisibleContacts = ({ filter, contacts }) => {
  const normalizedFilter = filter.toLowerCase();

  const result = contacts.items.filter(({ name, phone }) => {
    return (
      name.toLowerCase().includes(normalizedFilter) ||
      phone.toLowerCase().includes(normalizedFilter)
    );
  });

  return result;
};
