const Filter = ({ valueFilter, onChange, searchInputId }) => {
  return (
    <>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={valueFilter}
        onChange={onChange}
        id={searchInputId}
      />
    </>
  );
};
export default Filter;
