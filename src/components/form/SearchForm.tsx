import { Label } from "radix-ui";
import { useState } from "react";

type SearchFromProps = {
  userName: String;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ userName, setUsername }: SearchFromProps) => {
  const [text, setText] = useState(userName);
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") {
      console.log("please enter username");
      return;
    }
    setUsername(text);
  };
  return;

  <form
    onSubmit={handleSearch}
    className="flex items-center gap-x-2 w-full lg:w-1/3 mb-8"
  >
    <Label htmlFor="search" className="sr-only">
      Search
    </Label>
    <Input></Input>
  </form>;
};

export default SearchForm;
