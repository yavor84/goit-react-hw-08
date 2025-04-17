import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { RiContactsFill } from 'react-icons/ri';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { IoMdCloseCircle } from 'react-icons/io';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.info}>
        <div className={css.string}>
          <RiContactsFill size={22} />
          <h3 className={css.name}>{name}</h3>
        </div>
        <div className={css.string}>
          <MdOutlinePhoneAndroid size={20} />
          <p className={css.name}>{number}</p>
        </div>
      </div>
      <button className={css.deleteBtn} onClick={handleDelete}>
        <IoMdCloseCircle size={20} />
      </button>
    </>
  );
};

export default Contact;
