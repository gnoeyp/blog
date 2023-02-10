import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";

type SearchProps = {
  onChange?: (value: string) => void;
  value?: string;
};

const Search = ({ onChange, value }: SearchProps) => {
  return (
    <div className="relative">
      <input
        className="w-96 h-10 px-10 border rounded-full border-gray-300 outline-none outline-offset-0 focus:outline-lime-100 focus:outline-2 text-gray-900"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange?.(e.target.value)
        }
        placeholder="Search posts"
      />
      <FontAwesomeIcon
        className="absolute left-4 top-3 text-gray-500"
        icon={faMagnifyingGlass}
      />
    </div>
  );
};

export default Search;
