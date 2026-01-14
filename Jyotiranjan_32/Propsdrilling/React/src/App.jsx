import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Counter from "./components/Counter";
import UsersRQ from "./components/UsersRQ";

function App() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div className={dark ? "dark app" : "app"}>
      {/* Navbar */}
      <nav>
        <div>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>
        <button className="theme-btn" onClick={() => setDark(!dark)}>
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      {/* Components */}
      <div className="card">
        <h2>Counter</h2>
        <Counter />
      </div>

      <div className="card">
        <h2>Users List (React Query)</h2>
        <UsersRQ />
      </div>
    </div>
  );
}

export default App;
