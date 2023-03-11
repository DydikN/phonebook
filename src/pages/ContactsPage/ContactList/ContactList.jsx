import { useDispatch, useSelector } from 'react-redux';

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
            <button
              className={styles.button}
              type="button"
              onClick={() => deleteContactById(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
