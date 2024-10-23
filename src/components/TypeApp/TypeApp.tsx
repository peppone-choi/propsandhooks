import React from "react";
import cn from "classnames/bind";
import styles from "./TypeApp.module.scss";
import Input from "../input/Input";

const cx = cn.bind(styles);

type TypeAppProps = {
  word: string;
  changeFunc?: (isCorrect: boolean) => void;
};

export default function TypeApp(props: TypeAppProps) {
  const [isCorrect, setIsCorrect] = React.useState<Array<boolean>>(props.word.split("").map(() => false));
  const { word } = props;
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = () => {
    const inputValue = inputRef.current?.value;
    if (!inputValue) return;
    const isCorrect = word.split("").map((letter, index) => letter === inputValue[index]);
    setIsCorrect(isCorrect);
    if (isCorrect.every((v) => v) && props.changeFunc) {
      props.changeFunc(true);
      inputRef.current!.value = "";
      setIsCorrect(word.split("").map(() => false));
    }
  };

  return (
    <div className={cx("Wrapper")}>
      <h1>
        {word.split("").map((letter, index) => (
          <span key={index} className={cx("Word", { Correct: isCorrect[index] })}>
            {letter}
          </span>
        ))}
      </h1>
      <Input placeholder="글자를 입력 해주세요" onChange={handleChange} inputRef={inputRef} />
    </div>
  );
}
