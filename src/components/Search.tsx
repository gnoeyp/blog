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
        className="w-96 h-10 px-10 rounded-full border border-gray-400 dark:border-gray-600 outline-none dark:bg-zinc-900 focus:border-lime-400 dark:focus:border-indigo-600 dark:text-gray-100"
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
