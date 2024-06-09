import { BiSun, BiMoon } from "react-icons/bi";
import { useThemeContext } from "../context/theme";
import styles from "../styles/components/switchTheme.module.scss";

export function SwitchTheme() {
  const { currentTheme, changeTheme } = useThemeContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const theme = e.target.checked ? "light" : "dark";
    changeTheme(theme);
  };

  const lightTheme = currentTheme === "light";

  return (
    <label
      className={`${styles.container} ${lightTheme ? "" : styles.darkScheme}`}
      aria-label="Alterar tema"
    >
      <input
        type="checkbox"
        checked={lightTheme}
        onChange={handleChange}
        className={styles.checkbox}
      />
      <BiSun aria-hidden="true" />
      <BiMoon aria-hidden="true" />
      <span className={styles.toggle} />
    </label>
  );
}
