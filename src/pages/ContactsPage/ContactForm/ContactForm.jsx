import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import styles from './contact-form.module.scss';
import inititalState from './initialState';
import {
  fetchContacts,
  addContact,
} from '../../../redux/contacts/contacts-operations';
import { getContacts } from '../../../redux/contacts/contacts-selectors';

function ContactForm() {
  const [state, setState] = useState({ ...inititalState });
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notiflix.Notify.failure(`${name} is already in contacts`);
    }

    const allData = {
      name: data.get('name').trim(),
      number: data.get('number').trim(),
    };

    if (name.trim() === '' && number.trim() === '') {
      return Notiflix.Notify.failure(`Please fill out contact form`);
    }

    dispatch(addContact(allData));
    setState({ ...inititalState });
  };

  const { name, number } = state;

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          type="text"
          label="Name"
          name="name"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          name="number"
          label="number"
          type="tel"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, backgroundColor: 'rgb(39, 61, 164)' }}
        >
          Add contact
        </Button>
      </Box>
    </Box>
    // <form className={styles.container} onSubmit={handleSubmit}>
    //   <label>
    //     <p className={styles.title}>Name</p>
    //     <input
    //       className={styles.input}
    // type="text"
    //       name="name"
    //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //       onChange={handleChange}
    //       value={name}
    //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //       placeholder="Surname Name"
    //       required
    //     />
    //   </label>
    //   <label>
    //     <p className={styles.title}>Number</p>
    //     <input
    //       className={styles.input}
    //       type="tel"
    //       name="phone"
    //       onChange={handleChange}
    //       value={phone}
    //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //       required
    //     />
    //   </label>
    //   <button className={styles.btnSubmit} type="submit">
    //     Add contact
    //   </button>
    // </form>
  );
}

export default ContactForm;
