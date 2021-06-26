import { ButtonHTMLAttributes, useState } from "react";
import cx from "classnames";
import "./styles.scss";

type ToggleSwitchProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ToggleSwitch(props: ToggleSwitchProps) {
  const [toggleSwitchActive, setToggleSwitchActive] = useState(
    localStorage.getItem("theme") === "dark"
  );

  function handleToggleSwitch() {
    setToggleSwitchActive(toggleSwitchActive ? false : true);
  }

  return (
    <div onClick={handleToggleSwitch} className="toggle">
      <button className={cx({ active: toggleSwitchActive })} {...props}>
        <span className="toggle-switch"></span>
      </button>
    </div>
  );
}
