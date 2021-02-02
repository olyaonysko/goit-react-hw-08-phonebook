import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {
  contactsOperations,
  contactsSelectors,
  contactsActions,
} from 'redux/contacts';
import s from './ContactList.module.css';

const ContactList = () => {
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  return (
    <>
      {contacts.length > 0 ? (
        <ul className={s.list}>
          {visibleContacts.map(contact => (
            <li key={contact.id} className={s.listItem}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <div className={s.button}>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() =>
                    dispatch(contactsOperations.deleteContact(contact.id))
                  }
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() =>
                    dispatch(contactsActions.addContactEdit(contact))
                  }
                >
                  <EditIcon />
                </IconButton>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your phonebook is empty. Add contact.</p>
      )}
    </>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;

/* <button
                type="button"
                className={s.button}
                onClick={() =>
                  dispatch(contactsOperations.deleteContact(contact.id))
                }
              >
                <Avatar className={classes.avatar}>
                  <DeleteIcon />
                </Avatar>
                Delete
              </button> */

/* <button
                type="button"
                className={s.button}
                onClick={() =>
                  dispatch(contactsActions.addContactEdit(contact))
                }
              >
                Edit
              </button> */
