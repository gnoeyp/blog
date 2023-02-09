import React from "react";

type SearchProps = {
  onChange?: (value: string) => void;
  value?: string;
};

const Search = ({ onChange, value }: SearchProps) => {
  return (
    <input
      className="w-96 h-10 px-3 border rounded-lg border-gray-300 outline-none focus:border-gray-500"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange?.(e.target.value)
      }
    />
  );
};

export default Search;
