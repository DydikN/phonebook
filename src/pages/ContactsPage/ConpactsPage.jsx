import { useSelector } from 'react-redux';

import ContactForm from '../ContactsPage/ContactForm/ContactForm';
import Filter from '../ContactsPage/Filter/Filter';
import ContactList from '../ContactsPage/ContactList/ContactList';
import {
  getError,
  getLoadig,
  getVisibleContacts,
} from '../../redux/contacts/contacts-selectors';

import Loader from 'components/Loader/Loader';
import Notiflix from 'notiflix';

const ContactsPage = () => {
  const isLoading = useSelector(getLoadig);
  const error = useSelector(getError);
  const isContacts = Boolean(useSelector(getVisibleContacts).length);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <div>
        <h2>Constacts</h2>
        {isLoading && <Loader />}
        {error && Notiflix.Notify.failure(error.message)}
        <Filter />

        {isContacts ? <ContactList /> : <p>No contacts</p>}
      </div>
    </>
  );
};

export default ContactsPage;
