import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={changeFilter}
        value={filter}
      />
    </>
  );
};

export default Filter;
