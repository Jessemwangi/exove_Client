import { DefaultTFuncReturn } from "i18next";
import styles from "./ButtonFancySquare.module.css";

import { MouseEventHandler } from "react";

interface IButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  color: string;
  children: JSX.Element | string | null | DefaultTFuncReturn;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

const ButtonFancySquare: React.FC<IButtonProps> = ({
  type,
  color,
  clickHandler,
  children,
  disabled,
}) => {
  console.log("disabled:", disabled);
  return (
    <button
      className={[styles[color], styles.fancyButton].join(" ")}
      type={type}
      onClick={clickHandler}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonFancySquare;
