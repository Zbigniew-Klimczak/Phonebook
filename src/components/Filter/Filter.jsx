import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilterChange = filterValue => dispatch(setFilter(filterValue));
  return (
    <Stack gap={4} className="mt-5">
      <Form.Group className="text-center">
        <Form.Label>Find contacts by name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="filter"
          autoComplete="off"
          value={filter}
          onChange={evt => handleFilterChange(evt.currentTarget.value.trim())}
        />
      </Form.Group>
    </Stack>
  );
};

export default Filter;
