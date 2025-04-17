import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { register } from '../../redux/auth/operations';
import { useId } from 'react';
import * as Yup from 'yup';

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
    dispatch(register(values));
    actions.resetForm();
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
      <Form autoComplete="off">
        <label htmlFor={nameId}>Username</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage name="name" component="span" />
        <label htmlFor={emailId}>Email</label>
        <Field type="email" name="email" id={emailId} />
        <ErrorMessage name="email" component="span" />
        <label htmlFor={passwordId}>Password</label>
        <Field type="password" name="password" id={passwordId} />
        <ErrorMessage name="password" component="span" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
