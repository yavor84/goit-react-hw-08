import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { useId } from 'react';
import * as Yup from 'yup';
import { Button, Box, TextField } from '@mui/material';

const UserSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('This field is required!').trim(),
  password: Yup.string()
    .min(7, 'Minimum 8 characters')
    .max(50, 'Too long!')
    .required('This field is required!')
    .trim(),
});

function LoginForm() {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {})
      .catch(error => {
        console.error('Login failed:', error);
      })
      .finally(() => {
        actions.setSubmitting(false);
        actions.resetForm();
      });
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form autoComplete="off">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,

              minWidth: {
                xs: 300,
                sm: 400,
                md: 550,
              },

              mx: 'auto',
              p: 3,
              border: '1px solid #ccc',
              borderRadius: 2,
              bgcolor: 'background.paper',
              boxShadow: 3,
            }}
          >
            <Field
              as={TextField}
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              id={emailId}
            />

            <Field
              as={TextField}
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              error={touched.password && !!errors.password}
              helperText={touched.password && errors.password}
              id={passwordId}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging In...' : 'Log In'}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
