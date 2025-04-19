import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { register } from '../../redux/auth/operations';
import { useId } from 'react';
import * as Yup from 'yup';
import { Button, Box, TextField } from '@mui/material';
import toast from 'react-hot-toast';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Too long!')
    .required('This field is required!')
    .trim(),
  email: Yup.string().email('Invalid email format').required('This field is required!').trim(),
  password: Yup.string()
    .min(8, 'Minimum 8 characters')
    .max(50, 'Too long!')
    .required('This field is required!')
    .trim(),
});

function RegistrationForm() {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success('Registration in successfully!');
      })
      .catch(error => {
        console.error('Registration failed:', error);
        toast.error('Registration failed!');
      })
      .finally(() => {
        actions.setSubmitting(false);
        actions.resetForm();
      });
  };

  return (
    <Formik
      initialValues={{
        name: '',
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
              name="name"
              type="text"
              label="Username"
              variant="outlined"
              fullWidth
              error={touched.name && !!errors.name}
              helperText={touched.name && errors.name}
              id={nameId}
            />

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
              {isSubmitting ? 'Registering...' : 'Sign up'}
            </Button>
          </Box>{' '}
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
