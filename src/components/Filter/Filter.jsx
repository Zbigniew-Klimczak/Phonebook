import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilterChange = filterValue => dispatch(setFilter(filterValue));
  return (
    <div>
      <label>
        Find contacts by name:
        <input
          type="text"
          name="filter"
          placeholder="Enter name"
          value={filter}
          onChange={evt => handleFilterChange(evt.currentTarget.value.trim())}
        />
      </label>
    </div>
  );
};

export default Filter;
