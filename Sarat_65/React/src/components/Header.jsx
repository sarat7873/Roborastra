import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

export default Header;
