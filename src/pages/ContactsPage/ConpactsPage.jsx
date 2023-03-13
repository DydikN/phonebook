import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';

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
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <div>
        <h2>Constacts</h2>
        {isLoading && <Loader />}
        {error && Notiflix.Notify.failure(error.message)}
        <Filter />

        {isContacts ? <ContactList /> : <p>No contacts</p>}
      </div>
    </Box>
  );
};

export default ContactsPage;
