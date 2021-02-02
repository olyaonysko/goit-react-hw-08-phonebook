import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { contactsOperations } from 'redux/contacts';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.getContacts()), [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
