import React, { ChangeEvent, FC, useState } from "react";
import SearchIcon from "../Icons/SearchIcon";

interface PropTypes {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className: string | undefined;
}

const SearchInput: FC<PropTypes> = ({ className = "", onChange }) => {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <div className={`position-relative search-input-wrapper ${className}`}>
      <input
        type="search"
        id="search"
        onChange={onChange}
        placeholder={!focused ? "Search..." : ""}
        className={`form-control search-input`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {focused && (
        <label className="search-label" htmlFor="search">
          Search
        </label>
      )}
      {!focused && <SearchIcon className="search-icon" />}
    </div>
  );
};

export default SearchInput;
