import css from '../components/App.module.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { RiContactsBook3Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectLoading } from '../redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <RiContactsBook3Fill size={50} />
        <h1 className={css.title}>Phonebook</h1>
      </div>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}
