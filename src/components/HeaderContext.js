import { useContext } from "react";
import ThemeConext from "../context/ThemeContext";

const HeaderContext = ({ texts, handleLanguage, auth, handleAuth }) => {
  const { theme, handleTheme } = useContext(ThemeConext);

  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubitle}</h3>

      <select name="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>

      <label htmlFor="dark-context">{texts.headerDark}</label>
      <input
        type="radio"
        name="theme"
        id="dark-context"
        onClick={handleTheme}
        value="dark"
      />
      <label htmlFor="light-context">{texts.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="light-context"
        onClick={handleTheme}
        value="light"
      />

      <button onClick={handleAuth}>
        {auth ? texts.buttonLogout : texts.buttonLogin}
      </button>
    </header>
  );
};

export default HeaderContext;
