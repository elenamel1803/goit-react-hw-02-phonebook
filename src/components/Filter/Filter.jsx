const Filter = ({ filter, onFilterChange }) => {
  return (
    <>
      <label>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </>
  );
};

export default Filter;
