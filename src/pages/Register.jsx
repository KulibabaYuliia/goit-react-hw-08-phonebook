import { RegistrationForm } from 'components/RegisterForm/RegisterForm';
import { Loader } from 'components/Loader/Loader';
import {
  selectIsLoading,
  selectError,
} from 'redux/contacts/contacts.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/auth.operations';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const errorMassege = useSelector(selectError);
  const dispatch = useDispatch();

  const submitHandler = (values, action) => {
    const contact = {
      name: values.userName,
      email: values.email,
      password: values.password,
    };
    console.log(contact);
    dispatch(registerThunk(contact));
    action.resetForm();
  };

  return (
    <div>
      <RegistrationForm submitHandler={submitHandler} />
      {isLoading && <Loader />}
      {errorMassege && (
        <div>Something went wrong. Error messege: {errorMassege}</div>
      )}
    </div>
  );
}
