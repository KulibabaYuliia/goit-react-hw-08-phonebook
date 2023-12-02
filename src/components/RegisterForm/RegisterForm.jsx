import { FormWrap, StyledField } from './RegisterForm.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

let userSchema = yup.object().shape({
  userName: yup
    .string('Name is not valid')
    .required('Field should not be empty'),
  email: yup
    .string('Email is not valid')
    .email('Email is not valid')
    .required('Field should not be empty'),
  password: yup
    .string('Password is not valid')
    .min(7, 'Password is too short')
    .required('Field should not be empty'),
});

export const RegistrationForm = ({ submitHandler }) => {
  return (
    <Formik
      initialValues={{ userName: '', email: '', password: '' }}
      validationSchema={userSchema}
      onSubmit={submitHandler}
    >
      <FormWrap>
        <label>
          Name
          <StyledField type="text" name="userName" />
          <ErrorMessage name="userName" component="div" />
        </label>
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
        <button type="submit">SignUp</button>
      </FormWrap>
    </Formik>
  );
};
