import { ContactWrap } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { fetchDeleteContact } from 'redux/contacts/contacts.operations';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <ContactWrap>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button onClick={() => dispatch(fetchDeleteContact(contact.id))}>
        delete
      </button>
    </ContactWrap>
  );
};
