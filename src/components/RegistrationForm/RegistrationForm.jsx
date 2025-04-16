import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { register } from '../../redux/auth/operations';
import { useId } from 'react';

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
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor={nameId}>Username</label>
        <Field type="text" name="name" id={nameId} />
        <label htmlFor={emailId}>Email</label>
        <Field type="email" name="email" id={emailId} />
        <label htmlFor={passwordId}>Password</label>
        <Field type="password" name="password" id={passwordId} />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
