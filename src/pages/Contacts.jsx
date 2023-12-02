import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { ContactsList } from 'components/ContactsList/ContactsList';
import {
  selectIsLoading,
  selectError,
} from 'redux/contacts/contacts.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts.operations';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const errorMassege = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      {errorMassege && (
        <div>Something went wrong. Error messege: {errorMassege}</div>
      )}
      <ContactsList />
    </div>
  );
}
