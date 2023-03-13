import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

import { deleteContact } from '../../../redux/contacts/contacts-operations';

import { getVisibleContacts } from '../../../redux/contacts/contacts-selectors';
import styles from './contact-list.module.scss';

const ContactList = () => {
  const arrayContacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();

  const deleteContactById = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul className={styles.list}>
        {arrayContacts.map(({ id, name, number }) => (
          <li className={styles.item} key={id}>
            <p className={styles.text}>
              {name}: {number}
            </p>
            <Button
              className={styles.button}
              type="button"
              variant="contained"
              onClick={() => deleteContactById(id)}
              sx={{ mt: 3, mb: 2, backgroundColor: 'rgb(39, 61, 164)' }}
            >
              Delete
            </Button>

            {/* <button
              className={styles.button}
              type="button"
              onClick={() => deleteContactById(id)}
            >
              Delete
            </button> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
