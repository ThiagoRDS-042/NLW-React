import { useState } from "react";
import { useTheme } from "../../hooks/userTheme";
import "./styles.scss";

export function ToggleSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [toggleSwitchActive, setToggleSwitchActive] = useState(
    theme === "light" ? false : true
  );

  function handleToggleSwitch() {
    setToggleSwitchActive(!toggleSwitchActive);
    toggleTheme();
  }

  return (
    <div className="switch_container">
      <input
        id="switch-shadow"
        onChange={handleToggleSwitch}
        className="switch"
        type="checkbox"
        checked={toggleSwitchActive}
      />
      <label htmlFor="switch-shadow"></label>
    </div>
  );
}
