// src/components/form/SearchForm.tsx
import { useState } from "react";
import { toast } from "sonner";

type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
  const [text, setText] = useState(userName);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === "") {
      // ✅ پیام خطا با toast
      toast.error("Please enter a username", {
        description: "You need to type a GitHub username to search.",
        duration: 3000,
      });
      return;
    }
    setUserName(text);
    
    // ✅ پیام موفقیت با toast
    toast.success("Searching for user", {
      description: `Looking for "${text}" on GitHub...`,
      duration: 2000,
    });
  };

  return (
    <div>
      {/* 🔴 کادر هشدار قرمز برای کاربران ایرانی */}
      <div className="mb-4 p-3 bg-amber-50 border border-amber-500 rounded-lg text-amber-700 text-sm text-center">
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