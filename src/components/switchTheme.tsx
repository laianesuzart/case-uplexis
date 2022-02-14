import { BiSun, BiMoon } from "react-icons/bi";
import { useThemeContext } from "../context/theme";
import styles from "../styles/components/switchTheme.module.scss";

export function SwitchTheme() {
  const { currentTheme, changeTheme } = useThemeContext();

  return (
    <div className={styles.container}>
      <BiSun
        style={{
          color: currentTheme === "dark" ? "gray" : "rgb(238, 176, 6)",
        }}
        onClick={() => changeTheme("light")}
      />
      <BiMoon
        style={{
          color: currentTheme === "light" ? "gray" : "rgb(97, 16, 190)",
        }}
        onClick={() => changeTheme("dark")}
      />
    </div>
  );
}
