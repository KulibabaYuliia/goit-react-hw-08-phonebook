import { FormWrap, StyledField } from './LoginForm.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

// import { useDispatch } from 'react-redux';
// import { fetchLoginSubmit } from 'redux/auth/auth.operations';

let userSchema = yup.object().shape({
  name: yup.string('Email is not valid').email('Email is not valid').required(),
  number: yup
    .string('Password is not valid')
    .min(7, 'Password is too short')
    .required(),
});

export const LoginForm = ({ submitHandler }) => {
  // const dispatch = useDispatch();

  // const submitHandler = (values, action) => {
  //   const contact = {
  //     email: values.email,
  //     password: values.password,
  //   };
  //   dispatch(fetchLoginSubmit(contact));
  //   action.resetForm();
  // };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={userSchema}
      onSubmit={submitHandler}
    >
      <FormWrap>
        <label>
          Email
          <StyledField type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </label>
        <label>
          Password
          <StyledField
            type="password"
            name="password"
            placeholder="***********"
          />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Log in</button>
      </FormWrap>
    </Formik>
  );
};
