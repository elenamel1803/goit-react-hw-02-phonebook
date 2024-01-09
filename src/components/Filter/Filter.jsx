import { Label, Input } from './FilterStyled';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </>
  );
};

export default Filter;
