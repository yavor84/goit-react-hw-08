import { useId } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

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
    dispatch(addContact(values));
    actions.resetForm();
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
      <Form className={css.form}>
        <div className={css.wrap}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field className={css.input} type="text" name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.wrap}>
          <label className={css.label} htmlFor={numberId}>
            Number
          </label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={numberId}
            placeholder="+380XXXXXXXXX"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
