import { FormWrap, StyledField } from './LoginForm.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

let userSchema = yup.object().shape({
  email: yup
    .string('Email is not valid')
    .email('Email is not valid')
    .required(),
  password: yup
    .string('Password is not valid')
    .min(7, 'Password is too short')
    .required(),
});

export const LoginForm = ({ submitHandler }) => {
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