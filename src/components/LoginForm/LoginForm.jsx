import { TextField, Grid, Button, Paper, Box, Typography } from '@mui/material';
import { Formik, ErrorMessage } from 'formik';
import { Form, Field } from 'formik';
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
    <Grid container>
      <Grid item sm={3} xs={false}></Grid>
      <Grid item sm={6} xs={12}>
        <Paper>
          <Box
            m={5}
            p={3}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h5">Login Form</Typography>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={userSchema}
              onSubmit={submitHandler}
            >
              <Form>
                <Field
                  as={TextField}
                  type="email"
                  name="email"
                  label="Email"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  helperText={<ErrorMessage name="email" />}
                  // error={props.errors.email && props.touched.email}
                />

                <Field
                  as={TextField}
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="***********"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  helperText={<ErrorMessage name="password" />}
                />

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Log in
                </Button>
              </Form>
            </Formik>
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={3} xs={false}></Grid>
    </Grid>
  );
};
