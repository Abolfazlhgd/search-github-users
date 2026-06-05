// src/components/form/SearchForm.tsx
import { useState } from "react";

type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
  const [text, setText] = useState(userName);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === "") {
      console.log("please enter username");
      return;
    }
    setUserName(text);
  };

  return (
    <div>
      {/* 🔴 کادر هشدار قرمز برای کاربران ایرانی */}
      <div className="mb-4 p-3 bg-red-50 border border-red-500 rounded-lg text-red-700 text-sm text-center">
        ⚠️ If you are in Iran, please enable your VPN to connect to GitHub API.
      </div>

      <form
        onSubmit={handleSearch}
        className="flex items-center mx-auto gap-x-2 w-full lg:w-1/3 mb-8"
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search Github Users..."
          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
