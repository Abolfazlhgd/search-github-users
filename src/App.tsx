import { useState } from "react";
import "./App.css";
import SearchForm from "./components/form/SearchForm";
import UserProfile from "./components/user/UserProfile";

const App = () => {
  const [userName,setUserName] = useState('Abolfazlhgd')
  return (
    <main className="mx-auto mx-w-6xl px-8 py-20">
      <SearchForm userName={userName} setUserName={setUserName}/>
      <UserProfile   userName={userName} />
    </main>
  )
}

export default App;
