import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({ onSearchChange }) => {
  const [search, setSeearch] = useState(null);

  const loadOptions = (inputValue) => {};

  const handleOnChange = (searchData) => {
    setSeearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
