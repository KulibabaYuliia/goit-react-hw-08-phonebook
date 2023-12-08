import { LoginForm } from 'components/LoginForm/LoginForm';
import { Loader } from 'components/Loader/Loader';
import {
  selectIsLoading,
  selectError,
} from 'redux/contacts/contacts.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.operations';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
  const errorMassege = useSelector(selectError);
  const dispatch = useDispatch();

  const submitHandler = (values, action) => {
    const contact = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginThunk(contact));
    action.resetForm();
  };

  return (
    <div>
      <LoginForm submitHandler={submitHandler} />
      {isLoading && <Loader />}
      {errorMassege && (
        <div>Something went wrong. Error messege: {errorMassege}</div>
      )}
    </div>
  );
}
