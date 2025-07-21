import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import type { RootState } from "../store";
import { setSearchQuery } from "../store/pagination/paginationSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const currentQuery = useSelector((state: RootState) => state.pagination.searchQuery);
  const [input, setInput] = useState(currentQuery);

  const handleSearch = () => {
    dispatch(setSearchQuery(input));
  };

  return (
    <form className="flex justify-center mb-6 gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search..."
        className="input input-bordered w-full max-w-xs"
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
