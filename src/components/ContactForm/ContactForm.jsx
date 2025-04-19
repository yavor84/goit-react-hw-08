import { useId } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Button, Box, TextField } from '@mui/material';
import toast from 'react-hot-toast';

const phoneRegExp = /^\+?\d{10,15}$/;

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 characters')
    .max(50, 'Too long!')
    .required('This field is required!')
    .trim(),
  number: Yup.string()
    .min(10, 'Enter in the format +380XXXXXXXXX')
    .max(15, 'Enter in the format +380XXXXXXXXX')
    .required('This field is required!')
    .matches(phoneRegExp, 'Enter in the format +380XXXXXXXXX')
    .trim(),
});

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success('Contact successfully added!');
      })
      .catch(error => {
        console.error('Failed to add contact:', error);
        toast.error('Failed to add contact!');
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
        number: '',
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
                xs: 230,
                sm: 350,
                md: 400,
              },

              mx: 'auto',
              p: 3,
              border: '1px solid #ccc',
              borderRadius: 2,
              bgcolor: 'background.paper',
              boxShadow: 2,
            }}
          >
            <Field
              as={TextField}
              name="name"
              type="text"
              label="Name"
              variant="outlined"
              fullWidth
              error={touched.name && !!errors.name}
              helperText={touched.name && errors.name}
              id={nameId}
            />

            <Field
              as={TextField}
              name="number"
              type="tel"
              label="Number"
              variant="outlined"
              fullWidth
              placeholder="+380XXXXXXXXX"
              error={touched.number && !!errors.number}
              helperText={touched.number && errors.number}
              id={numberId}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disabled={isSubmitting}
              sx={{ mt: 2 }}
            >
              {isSubmitting ? 'Adding...' : 'Add contact'}
            </Button>
          </Box>{' '}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
