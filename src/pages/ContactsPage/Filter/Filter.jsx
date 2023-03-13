import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '@mui/material';

import { setFilter } from '../../../redux/filter/filter-slice';
import { getFilter } from '../../../redux/filter/filter-selectors';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>

      <TextField
        margin="normal"
        size="small"
        onChange={changeFilter}
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        type="text"
      />
    </>
  );
};

export default Filter;
