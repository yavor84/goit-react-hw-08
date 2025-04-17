import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { useId } from 'react';
import * as Yup from 'yup';

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
    dispatch(logIn(values));
    actions.resetForm();
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
      <Form autoComplete="off">
        <label htmlFor={emailId}>Email</label>
        <Field type="email" name="email" id={emailId} />
        <ErrorMessage name="email" component="span" />
        <label htmlFor={passwordId}>Password</label>
        <Field type="password" name="password" id={passwordId} />
        <ErrorMessage name="password" component="span" />
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
