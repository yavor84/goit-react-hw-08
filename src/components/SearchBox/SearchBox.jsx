import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { FaSearch } from 'react-icons/fa';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(selectNameFilter);
  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <div className={css.search}>
        <FaSearch size={18} className={css.icon} />
        <h2 className={css.title}>Find contacts by name or number</h2>
      </div>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Search..."
        value={filterName}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
