import { ButtonHTMLAttributes, useState } from "react";
import { useTheme } from "../../hooks/userTheme";
import "./styles.scss";

type ToggleSwitchProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ToggleSwitch(props: ToggleSwitchProps) {
  const { theme, toggleTheme } = useTheme();
  const [toggleSwitchActive, setToggleSwitchActive] = useState(
    localStorage.getItem("theme")
  );

  function handleToggleSwitch() {
    setToggleSwitchActive(theme === "light" ? "dark" : "light");
    toggleTheme();
  }

  return (
    <div className="switch_container">
      <input
        id="switch-shadow"
        onChange={handleToggleSwitch}
        className="switch"
        type="checkbox"
        checked={toggleSwitchActive === "dark"}
      />
      <label htmlFor="switch-shadow"></label>
    </div>
  );
}
