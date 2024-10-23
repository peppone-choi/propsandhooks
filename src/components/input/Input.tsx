import React from "react";
import cn from "classnames/bind";
import styles from "./Input.module.scss";

const cx = cn.bind(styles);

type InputProps = {
  placeholder: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
};

export default function Input(prop: InputProps) {
  const { placeholder, onKeyDown, inputRef, onChange } = prop;
  return (
    <div className={cx("Wrapper")}>
      <input className={cx("Input")} placeholder={placeholder} onChange={onChange} onKeyDown={onKeyDown} ref={inputRef} />
    </div>
  );
}
