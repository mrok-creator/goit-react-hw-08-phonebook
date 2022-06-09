import { useState, useCallback, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Loader from 'shared/components/Loader';

import {
  getContacts,
  getLoading,
  getError,
} from 'redux/Contacts/contacts-selectors';
import {
  getUserContacts,
  addContact,
  removeContact,
} from 'redux/Contacts/contacts-operation';

import s from './phoneBook.module.css';

function PhoneBook() {
  const contacts = useSelector(getContacts, shallowEqual);
  const isLoading = useSelector(getLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);

  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(getUserContacts());
  }, [dispatch]);

  const addContacts = useCallback(
    data => dispatch(addContact(data)),
    [dispatch]
  );

  const deleteContacts = useCallback(
    id => dispatch(removeContact(id)),
    [dispatch]
  );

  const changeFilter = useCallback(e => setFilter(e.target.value), [setFilter]);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const filterRequest = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const res = name.toLowerCase().includes(filterRequest);
      return res;
    });

    return filteredContacts;
  };

  return (
    <>
      <h1 className={s.title}>Create New Contact</h1>
      <ContactForm onSubmit={addContacts} />

      <h2 className={s.title}>Contacts</h2>

      <Filter onChange={changeFilter} filter={filter} />

      {error && <div className={s.error}>{error}</div>}

      {!error && (
        <ContactList
          contacts={getFilteredContacts()}
          deleteContacts={deleteContacts}
        />
      )}

      {isLoading && <Loader />}
    </>
  );
}

export default PhoneBook;
